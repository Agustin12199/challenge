import React, {} from 'react';
import { connect } from 'react-redux';
import { usePagination } from '../hooks/usePagination';
import Buttons from '../components/Buttons'
import { Link } from 'react-router-dom';

const Cataloge = ({responseData, loadingTrue}) => {

    const {numberPages, currentElements, handleClick} = usePagination(responseData, 8)

    let itemsRender

    if(currentElements) {
        itemsRender = currentElements.map( (value) => {
           return  <div className="column is-12-mobile is-3-desktop is-6-tablet">
                         <Link to={`/cataloge/${value.id}`}>
                            <div className=" is-flex is-flex-direction-column is-align-items-center	font mulish card-container">
                            <img src={value.images[1]} alt="product" width="100%"/>
                                    <div className="is-flex is-justify-content-space-between width mt-2 px-2">
                                        <p className="title card-title">{value.title}</p>
                                        <div className="pr-2 ">
                                        {
                                            value.offer? 
                                            <p className="font-w-6 green">{value.currency} {value.offer.price}</p>  : <p className="font-w-6 normal">{value.currency}{value.price}</p>
                                        }
                                        <div class="container-price pr-2">
                                        {
                                        value.offer? <span className="offer true">{value.currency} {value.price}</span> : <span className="offer false"></span>
                                        }
                                        </div>
                                        </div>
                                    </div>
                                    <Link  to={`/cataloge/${value.id}`} class="btn font-color my-5">More info</Link>   
                            </div>
                         </Link>
                     </div>
        })
    }
    return(
       <div className="container mt-5">
           {
               loadingTrue? <div className="button is-loading is-rounded" style={{border: "none", marginTop: "150px"}}></div> :
                <div><div className="columns is-flex is-flex-wrap-wrap is-desktop">
                {itemsRender}
               </div>
               <div className="mt-5 mb-4 is-flex is-justify-content-center">
             
               { [...Array(numberPages)].map((e, i) => {
                        return <Buttons key={i} value={i} onClick={handleClick}/>
                })}
                </div> </div>
           }
       </div>
    )
}

const mapStateToProps = state => {
    return{
        responseData: state.data.response || [],
        loadingTrue: state.data.loading
    }
}

export default connect(mapStateToProps)(Cataloge)