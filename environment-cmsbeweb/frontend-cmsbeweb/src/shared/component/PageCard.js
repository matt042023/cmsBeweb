import React from 'react';
import CardGeneric from '../generic/CardGeneric';
import IconButton from '../generic/IconButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PageCard.css';
import PropTypes from 'prop-types';


function PageCard(props) {

    // Function to handle redirection when card is clicked
    const redirect = () => {
        window.location.href = props.redirect;
    };

  return (
    <CardGeneric id='PageCard' isDarkMode={props.isDarkMode} onClick={redirect}>
        <p className='titleText'>{props.pageName}</p>
        <div className='pagePreviewPlaceholder'> </div>
        <div className='pageCardButtons'>
            {props.modifyButton !== null ? <IconButton icon='bi-pencil-square' buttonAction={props.modifyButton}/>: null}
            {props.deleteButton !== null ? <IconButton icon='bi-x-circle' buttonAction={props.deleteButton}/> : null}
        </div>
    </CardGeneric>
  );
}

PageCard.propTypes = {
  isDarkMode: PropTypes.bool, // isDarkMode prop is required and should be a boolean
  redirect: PropTypes.string, // redirect prop is required and should be a string
  pageName: PropTypes.string.isRequired, // pageName prop is required and should be a string
  modifyButton: PropTypes.func, // modifyButton prop is optional and should be a function
  deleteButton: PropTypes.func // deleteButton prop is optional and should be a function
};
export default PageCard;
