import React from 'react';
import ListHeader from '../generic/ListHeader';
import ListItem from '../generic/ListItem';
import PropTypes from 'prop-types';

/**
 * @description                             Component that displays a list with headers, similar to a <table> element 
 * 
 * @param {object}          props
 * @param {boolean}         isDarkMode      props.isDarkMode    Either 'true' or 'false'
 * @param {array}           listHeaders     props.listHeaders   An array with the header of the list
 * @param {array}           listRows        props.listRows      An array with the contents of the list where 1 index = 1 row
 * @param {null | function} modifyButton    props.modifyButton  Either null or a function that is passed to the 'modify' IconButton element
 * @param {null | function} deleteButton    props.deleteButton  Either null or a function that is passed to the 'delete' IconButton element
 * 
 * 
 * 
 * @returns                         ContainerCustom component
 */

function ListProject(props){
    return ( 
        <div className='listproject' isDarkMode={props.isDarkMode.toString()}>
            <ListHeader content={props.listHeaders} modifyButton={props.modifyButton} deleteButton={props.deleteButton} />
            
            {props.listRows.map(function(data, index) {
                return (
                    <ListItem
                        key={index}
                        isDarkMode={props.isDarkMode} 
                        content={data} 
                        modifyButton={props.modifyButton} 
                        deleteButton={props.deleteButton}  
                    />
                )
            })}  
                
        </div>
    )
}

ListProject.propTypes = {
    isDarkMode: PropTypes.bool.isRequired, // isDarkMode prop is required and should be a boolean
    listHeaders: PropTypes.array.isRequired, // listHeaders prop is required and should be an array
    listRows: PropTypes.array.isRequired, // listRows prop is required and should be an array
    modifyButton: PropTypes.func, // modifyButton prop is optional and should be a function
    deleteButton: PropTypes.func // deleteButton prop is optional and should be a function
  };

export default ListProject ;