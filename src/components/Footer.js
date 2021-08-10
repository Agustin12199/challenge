import moment from 'moment';
import React from 'react';
import logo from '../images/logo.png'

export const Footer = () => {
    
    return(<div className="is-flex is-flex-direction-column is-align-items-center mb-3 pt-2" style={{borderTop: '1px solid  rgba(0, 0, 0, 0.1)'}}>
       <img src={logo} alt="logo" width="80" style={{opacity: '.6'}}/>
        <p className="is-size-7 mt-3 has-text-grey-light"> Copyright ©{moment().format('YYYY')} BUSINESS NAME. Designed by <span className="">Agustin</span></p>
      
    </div>)
}