import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Card } from 'react-bootstrap';
import './CardGeneric.css'
import PropTypes from 'prop-types';

function CardGeneric(props) {
    
    const cardClasses = `CardGeneric ${props.isDarkMode ? 'darkmode' : ''}`;

    return (
        <div className="CardContainer">
            <Card 
                className={cardClasses} 
                id={props.id} 
                isdarkmode={props.isDarkMode.toString()}
            >
                <Card.Body>
                    {props.children}
                </Card.Body>
            </Card>
        </div>
    );
}

CardGeneric.propTypes = {
    isDarkMode: PropTypes.bool.isRequired, // isDarkMode prop is required and should be a boolean
    id: PropTypes.string, // id prop is optional and should be a string
    children: PropTypes.node.isRequired // children prop is required and can be any renderable React node
  };

export default CardGeneric;