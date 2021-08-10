import React, { useEffect } from "react";
import { useParams } from "react-router";
import { responseQuestionsAction } from "../store/fetchData/action";
import axios from "axios";
import { connect } from "react-redux";
import moment from "moment";

const Questions = ({ response, responseData }) => {
  const { id } = useParams();
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          `https://rooftop-api-rest-frontend.herokuapp.com/questions?item_id=${id}`
        )
        .then((res) => {
          response(res.data);
        });
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  const date = responseData.map((value) => {
    return moment(value.sent_at).format("DD-MM-YYYY");
  });

  return (
    <div>
      {responseData.length > 0 ? (
        <div className="mt-6">
          <h1 className="font mulish color is-size-2 mb-3">QUESTIONS</h1>
          <div>
            {responseData.map((value, index) => {
              return (
                <div className="font mulish card-container mb-2 py-3 px-5">
                  <div>
                    <p className="font-w-6">- {value.customer_name}</p>
                    <p>
                      “ {value.question} ”{" "}
                      <span className="ml-4 has-text-grey is-size-7">
                        {date[index]}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-w-6 has-text-right">Answer</p>
                    <p className="has-text-right">“ {value.answer} ”</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    responseData: state.data.dataQuestions || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    response: (data) => dispatch(responseQuestionsAction(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Questions);
