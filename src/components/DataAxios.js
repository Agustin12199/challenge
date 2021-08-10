import React, { useEffect } from "react";
import axios from "axios";
import {
  responseAction,
  errAction,
  loadingAction,
} from "../store/fetchData/action";
import { connect } from "react-redux";
import { sample } from "underscore";
import { Link } from "react-router-dom";

const DataAxios = ({ response, err, loading, responseData, loadingTrue }) => {
  const copyData = sample(responseData, 4) || [];

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://rooftop-api-rest-frontend.herokuapp.com/items")
        .then((res) => {
          response(res.data.items);
        })
        .catch((error) => {
          err(error);
        })
        .finally(() => {
          loading(false);
        });
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <section class="mb-6 portfolio-experiment  py-6 background is-flex is-justify-content-center ">
        <Link to="/cataloge" className="py-3 px-6">
          <span className="text font mulish">Find the product for you</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </Link>
      </section>

      <div className="columns is-variable is-5-desktop">
        {loadingTrue ? (
          <div
            className="button is-loading is-rounded"
            style={{ border: "none", marginTop: "150px" }}
          ></div>
        ) : (
          copyData.map((value) => {
            return (
              <div className="column">
                <Link to={`/cataloge/${value.id}`}>
                  <div className=" is-flex is-flex-direction-column is-align-items-center	font mulish card-container">
                    <img src={value.images[1]} alt="product" width="100%" />
                    <div className="is-flex is-justify-content-space-between width mt-2 px-2">
                      <p className="title card-title">{value.title}</p>
                      <div>
                        {value.offer ? (
                          <p className="font-w-6 green">${value.offer.price}</p>
                        ) : (
                          <p className="font-w-6 normal">${value.price}</p>
                        )}
                        <div class="container-price pr-2">
                          {value.offer ? (
                            <span className="offer true">${value.price}</span>
                          ) : (
                            <span className="offer false"></span>
                          )}
                        </div>
                      </div>
                    </div>
                    <Link to={`/cataloge/${value.id}`} class="btns my-5">
                      More info
                    </Link>
                  </div>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    response: (data) => dispatch(responseAction(data)),
    err: (error) => dispatch(errAction(error)),
    loading: (value) => dispatch(loadingAction(value)),
  };
};
const mapStateToProps = (state) => {
  return {
    responseData: state.data.response || [],
    loadingTrue: state.data.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataAxios);
