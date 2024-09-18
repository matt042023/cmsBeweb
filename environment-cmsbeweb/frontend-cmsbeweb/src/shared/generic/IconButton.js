import React from 'react';
import './IconButton.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PropTypes from 'prop-types';

/**
 * @description                         A small icon that is a button. Executes passed on function when clicked
 * 
 * @param {object}      props 
 * @param {string}      icon            props.icon          The icon to be displayed in the button
 * @param {function}    buttonAction    props.buttonAction  Funcion that executes on click of the button
 * 
 * @returns                             IconButton component
 */
function IconButton(props){
    return (
        <button className='IconButton' onClick={props.buttonAction}>
            <i className={props.icon}/>
        </button>
    )
}

IconButton.propTypes = {
    icon: PropTypes.string.isRequired, // icon prop is required and should be a string
    buttonAction: PropTypes.func.isRequired // buttonAction prop is required and should be a function
  };

export default IconButton ;