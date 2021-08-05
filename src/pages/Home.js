import React from 'react';
import {Carousel} from '3d-react-carousal';
import bannerOne from '../images/banner_1.jpg';
import bannerTwo from '../images/banner_2.jpg';
import bannerThree from '../images/banner_3.jpg';

export const Home = () => {
    let slides = [
        <img  src={bannerOne} alt="Banner one" />,
        <img  src={bannerTwo} alt="2" />  ,
        <img  src={bannerThree} alt="3" /> ];
    return(
        <div className="mt-5">
            <Carousel slides={slides}/>
        </div>
    )
}