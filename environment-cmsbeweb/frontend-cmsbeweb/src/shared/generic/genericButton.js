import React, { useState } from 'react';
import './genericButton'
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CustomButton(props) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const redirect = () => {
    window.location.href = props.redirect;
  };

return (
    <Button 
        className={`ButtonContainer ${isHover ? 'hover' : ''}`}
        variant="primary"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={redirect} // Utilisez la fonction redirect lors du clic sur le bouton
    >
        <div className="IconContainer">
            {props.icon}
        </div>
        <p className={`ButtonText`}>{props.text}</p>
    </Button>
);

}

CustomButton.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired, 
};

export default CustomButton;