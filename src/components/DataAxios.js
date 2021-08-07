import React, { useEffect } from 'react';
import axios from 'axios';
import {responseAction, errAction, loadingAction} from '../store/fetchData/action'
import { connect } from 'react-redux';
import { sample} from 'underscore';

const DataAxios = ({ response, err, loading, responseData}) => {
    const url = 'https://rooftop-api-rest-frontend.herokuapp.com/items'
    const copyData = sample(responseData, 4) || []
    console.log(copyData)

    useEffect(() => {
        const fetchData = () => {
            axios
                .get(url)
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
    }, []);


    return(
        <div className="container">
                <section class="mb-6 portfolio-experiment  py-6 background is-flex is-justify-content-center ">
                    <a className="py-3 px-6">
                        <span className="text font mulish">Find the product for you</span>
                        <span className="line -right"></span>
                        <span className="line -top"></span>
                        <span className="line -left"></span>
                        <span className="line -bottom"></span>
                    </a>
                </section>
  
            <div className="columns is-variable is-5-desktop">
            { copyData.map( (value) => {
               return <div className="column">
                        <div className=" is-flex is-flex-direction-column is-align-items-center	font mulish card-container">
                            <img src={value.images[1]} alt="product" width="100%"/>
                                <div className="is-flex is-justify-content-space-between width mt-2 px-2">
                                    <a className="title card-title">{value.title}</a>
                                    <div>
                                        <p className="font-w-6">${
                                            value.offer? value.offer.price : value.price
                                        }</p>
                                        <div class="container-price pr-2">
                                        {
                                        value.offer? <span className="offer true">${value.price}</span> : <span className="offer false"></span>
                                        }
                                        </div>
                                    </div>
                                </div>
                                
                                <a href="" class="btn font-color my-5">More info</a>   
                        </div>
              
                   </div>
            
            })}
            </div>
        </div>
    )

};


const mapDispatchToProps = dispatch =>{
    return {
        response: data => dispatch(responseAction(data)),
        err: error => dispatch(errAction(error)),
        loading: value => dispatch(loadingAction(value))
    }
}
const mapStateToProps = state => {
    return{
        responseData: state.data.response || []
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataAxios)
