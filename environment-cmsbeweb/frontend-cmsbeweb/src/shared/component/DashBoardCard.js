import React from 'react';
import CardGeneric from '../generic/CardGeneric';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DashboardCard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PropTypes from 'prop-types';

function DashBoardCard(props) {
  // Function to handle redirection when card is clicked
  const redirect = () => {
    window.location.href = props.redirect;
  };

  const displayOverlay = () => {
    props.show(true)
  }

  return (
    <CardGeneric isDarkMode={props.isDarkMode}>
        <Card.Body onClick={props.redirect ? redirect : displayOverlay} className="card-body-container" > 
            <div className="card-title-container">
                <Card.Title className="text-center">
                    <i className={props.icon}></i> 
                     {props.title}
                </Card.Title>
                <Card.Text className="card-text-container">{props.text}</Card.Text>
            </div>
        </Card.Body>
    </CardGeneric>
  );
}

DashBoardCard.propTypes = {
  isDarkMode: PropTypes.bool.isRequired, // isDarkMode prop is required and should be a boolean
  redirect: PropTypes.string, // redirect prop is optional and should be a string
  show: PropTypes.func, // show prop is optional and should be a function
  title: PropTypes.string.isRequired, // title prop is required and should be a string
  icon: PropTypes.string.isRequired, // icon prop is required and should be a string
  text: PropTypes.string.isRequired
};

export default DashBoardCard;
