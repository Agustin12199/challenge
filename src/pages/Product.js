import React, { useEffect } from "react";
import { connect } from "react-redux";
import { responseProductAction } from "../store/fetchData/action";
import axios from "axios";
import { useParams } from "react-router";
import ImageGallery from 'react-image-gallery';
import { ExpirationDate } from "../components/ExpirationDate";
import { Table } from "../components/Table";
import { Form } from "../components/Form";
import  Questions  from "../components/Questions";


function Product({ response, responseData }) {
  const { id } = useParams();
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://rooftop-api-rest-frontend.herokuapp.com/items/${id}`)
        .then((res) => {
          response(res.data);
        });
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  const image = responseData.images || [];

  const images = [
    {
      original: `${image[0]}`,
      thumbnail: `${image[0]}`,
    },
    {
      original: `${image[1]}`,
      thumbnail: `${image[1]}`,
    },
    {
      original: `${image[2]}`,
      thumbnail: `${image[2]}`,
    },
  ];
  
  

  return (
    <div className="container mt-5">
      <div className="p-4 mx-4 card-container columns">
        <div className="column is-7">
            <ImageGallery items={images} />
        </div>
        <div className="column font mulish is-flex is-flex-direction-column is-justify-content-space-around ">
          <div>
            <h1 className="align-text-right pr-2 is-size-2">
              {responseData.title}
            </h1>
            <div>
            {responseData.offer? <ExpirationDate expiration={responseData.offer.expires_at}/>
                  : ''
                  }
            </div>
            <div className="pr-2 ">
              {responseData.offer ? (
                <p className="font-w-7 green align-text-right pr-2 is-size-3">
                  {responseData.currency} {responseData.offer.price}
                </p>
              ) : (
                <p className="font-w-6 normal pr-2 align-text-right is-size-3">
                  {responseData.currency}
                  {responseData.price}
                </p>
              )}
              <div class="container-price pr-2">
                {responseData.offer ? (
                  <span className="offer true is-size-4">
                    {responseData.currency} {responseData.price}
                  </span>
                ) : (
                  <span className="offer false"></span>
                )}
              </div>
            </div>
            
          </div>
          <div>
            <div className="is-flex is-justify-content-flex-end">
              <Table data={responseData}/>
          </div>
          </div>
      </div>
      </div>
        <Form/>
        <Questions/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    responseData: state.data.responseProduct || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    response: (data) => dispatch(responseProductAction(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
