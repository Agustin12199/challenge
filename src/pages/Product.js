import React, { useEffect } from "react";
import { connect } from "react-redux";
import { responseProductAction } from "../store/fetchData/action";
import axios from "axios";
import { useParams } from "react-router";
import ImageGallery from 'react-image-gallery';

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
      <div className="mx-4 card-container columns">
        <div className="column is-7">
            <ImageGallery items={images} />
        </div>
        <div className="column font mulish">
          <h1 className="align-text-right pr-2 is-size-2">
            {responseData.title}
          </h1>
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
      </div>
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
