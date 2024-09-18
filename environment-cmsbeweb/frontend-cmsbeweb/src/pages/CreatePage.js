import React from 'react';
import PropTypes from 'prop-types';
import SidebarLeftWidgets from '../shared/component/SidebarLeftWidgets';

function CreatePage(props) {
    return (
      <div>
        <SidebarLeftWidgets isDarkMode={props.isDarkMode}/>
      </div>
    );
  }

  CreatePage.propTypes = {
    isDarkMode: PropTypes.bool.isRequired // isDarkMode prop is required and should be a boolean
  };
   export default CreatePage;