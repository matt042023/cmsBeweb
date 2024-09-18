import React from 'react';
import './FormInput.css';
import PropTypes from 'prop-types';

function FormInput(props){
    return ( 
        <div className='FormInput' data-isdarkmode={props.isDarkMode.toString()}>
            <label className='textDefault'>{props.label}</label>
            {props.children}
        </div>
    )
}

FormInput.propTypes = {
    isDarkMode: PropTypes.bool.isRequired, // isDarkMode prop is required and should be a boolean
    label: PropTypes.string.isRequired, // label prop is required and should be a string
    children: PropTypes.node.isRequired // children prop is required and can be any renderable React node
  };

export default FormInput ;
