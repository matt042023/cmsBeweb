import React from 'react';
import Card from 'react-bootstrap/Card';
import './ContainerCustom.css';
import PropTypes from 'prop-types';

/**
 * @description                     Versatile container for cards, lists, forms and other
 * 
 * @param {object}  props
 * @param {boolean} isDarkMode      props.isDarkMode either 'true' or 'false'
 * 
 * @returns                         ContainerCustom component
 */

function ContainerCustom(props){

    return ( 
        <Card className='ContainerCustom' displayStyle={props.displayStyle} isdarkmode={props.isDarkMode.toString()} >
            {props.children}
        </Card>
    )
}

ContainerCustom.propTypes = {
    isDarkMode: PropTypes.bool.isRequired, // isDarkMode prop is required and should be a boolean
    displayStyle: PropTypes.string, // displayStyle prop is optional and should be a string
    children: PropTypes.node.isRequired // children prop is required and can be any renderable React node
  };

export default ContainerCustom ;
