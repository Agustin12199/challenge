import React from 'react';
import {Carousel} from '3d-react-carousal';
import bannerOne from '../images/banner_1.jpg';
import bannerTwo from '../images/banner_2.jpg';
import bannerThree from '../images/banner_3.jpg';
import DataAxios from '../components/DataAxios';



export const Home = () => {
  
    let slides = [
        <img  src={bannerOne} alt="Banner one" />,
        <img  src={bannerTwo} alt="2" />  ,
        <img  src={bannerThree} alt="3" /> ];
    


    return(
        <div className="mb-6">
            <div>
                <Carousel slides={slides}/>
            </div>
                <DataAxios/>
          
        </div>
    )
}