import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DeleteButton.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function DeleteButton(props) {
  const [isActive, setIsActive] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.show(true);
    }
  };

  return (
    <div
      className={`rounded-pill ${isActive ? 'active' : ''}`}
      id='deletebutton'
      onClick={() => props.show(true)}
      onKeyDown={handleKeyDown} // Adding keydown event listener
      tabIndex={0} // Making the div focusable
      role="button" // Specifying role as button for accessibility
      aria-label={props.text} // Providing a label for accessibility
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
    >
      
      <span>{props.text}</span>
      <button type="button" className="btn">
        <i className="bi bi-trash-fill"></i>
      </button>
    </div>
  );
}

// Adding PropTypes for validation
DeleteButton.propTypes = {
  text: PropTypes.string.isRequired, // text prop is required and should be a string
  show: PropTypes.func.isRequired // show prop is required and should be a function
};
