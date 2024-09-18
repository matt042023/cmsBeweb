import React from 'react';
import './Overlay.css';
import PropTypes from 'prop-types';


function Overlay(props){
    return ( 
       <div id="voidoverlay">
       {props.component}
       </div>
    )
}

Overlay.propTypes ={
    component: PropTypes.element.isRequired
}

export default Overlay ;