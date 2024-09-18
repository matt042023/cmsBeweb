import React from 'react';
import './ModifyMediaOverlay.css';
import PropTypes from 'prop-types';

/**
 * @description                                     Overlay Content (fits in Overlay component)
 * 
 * @param {object}  props
 * @param {boolean} isDarkMode  props.isDarkMode    Either true or false 
 * @param {function} setShowModifyMedia  props.setShowModifyMedia    Returns a boolean to display the overlay
 * 
 * @returns                                         Modify Media Content
 */


function ModifyMediaOverlay(props){
 
    return ( 
       <div className="modifymediaoverlay" id={props.isDarkMode === true ? 'dark':''}>
        <h3>Modifier un media</h3>
        <form action='#'>
        <div id="inputs-row">
         <div className="input-data">
            <label htmlFor='medianame'>Nom du Media</label><br/>
            <input name='medianame' type="text" placeholder='MonMedia.jpg' required/>
         </div>
         <div className="input-data">
         <label htmlFor='altmedianame'>Texte alternatif</label><br/>
            <input type="text" name='altmedianame'/>
         </div>
      </div>
      <div id="modifymediabuttons">
      <button onClick={() => props.setShowModifyMedia(false)}>Retour</button> 
      <button type="submit">Valider</button>
      </div>
        </form>
       </div>
    )
}

ModifyMediaOverlay.propTypes = {
   isDarkMode: PropTypes.bool.isRequired, // isDarkMode prop is required and should be a boolean
   setShowModifyMedia: PropTypes.func.isRequired // setShowModifyMedia prop is required and should be a function
 };

export default ModifyMediaOverlay ;