import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddButton.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function AddButton(props) {
  const [isActive, setIsActive] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.show(true);
    }
  };

  return (
    <button
      className={`rounded-pill ${isActive ? 'active' : ''}`}
      id='addbutton'
      onClick={() => props.show(true)}
      onKeyDown={handleKeyDown} // Adding keydown event listener
      tabIndex={0} // Making the button focusable
      aria-label={props.text} // Providing a label for accessibility
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
    >
      
      <span>{props.text}</span>
      <i className="bi bi-plus-circle-fill"></i>
    </button>
  );
}

// Adding PropTypes for validation
AddButton.propTypes = {
  text: PropTypes.string.isRequired, // text prop is required and should be a string
  show: PropTypes.func.isRequired // show prop is required and should be a function
};
