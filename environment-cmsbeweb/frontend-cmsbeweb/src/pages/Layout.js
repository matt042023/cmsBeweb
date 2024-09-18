import React from 'react';
import Header from '../shared/component/Header';
import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';
import HeaderLogin from '../shared/component/HeaderLogin';

function Layout(props) {  
  const location = useLocation();  
  const isLoginPage = location.pathname === '/'; 
  
  return (    
    <div>      
      {isLoginPage ? (
        <>  
          <HeaderLogin isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode} />
          <Outlet isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode} />     
        </>
      ) : (        
        <div>         
          <Header isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode} />          
          <Outlet isDarkMode={props.isDarkMode} setDarkMode={props.setDarkMode} />        
        </div>
      )}    
    </div>  
  );
}
Layout.propTypes = {
  isDarkMode: PropTypes.bool.isRequired, // isDarkMode prop is required and should be a boolean
  setDarkMode: PropTypes.func.isRequired // setDarkMode prop is required and should be a function
};

export default Layout;