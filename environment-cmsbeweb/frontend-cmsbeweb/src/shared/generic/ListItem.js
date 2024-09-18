import React from 'react';
import Card from 'react-bootstrap/Card';
import IconButton from './IconButton';
import './ListItem.css';
import PropTypes from 'prop-types';

/**
 * @description                             Card used as rows for a list. Similar to <tr> </tr>                               
 * 
 * @param {object}          props 
 * @param {array}           content         props.content       Array with each element to display on the line
 * @param {null | function} modifyButton    props.modifyButton  Either null or a function that is passed to the 'modify' IconButton element
 * @param {null | function} deleteButton    props.deleteButton  Either null or a function that is passed to the 'delete' IconButton element
 * 
 * @returns                                 ListItem component
 */

function ListItem(props){

    let buttonSpaceOne  = props.modifyButton !== null ? 'auto' : '';
    let buttonSpaceTwo  = props.deleteButton !== null ? 'auto' : '';

    return ( 
        <Card className='ListItem' isdarkmode={props.isDarkMode.toString()}  style={{gridTemplateColumns:`repeat(${props.content.length} , 1fr) ${buttonSpaceOne} ${buttonSpaceTwo}`}}>
            
            {props.content.map(function(data) {
                return (
                    <p key={data} className='textDefault'>
                        {data}
                    </p>
                )
            })}    

            {/* display IconButton if they are !== null in props and passes the defined function */}
            {props.modifyButton !== null ? <IconButton icon='bi-pencil-square' buttonAction={props.modifyButton}/>: null}
            {props.deleteButton !== null ? <IconButton icon='bi-x-circle' buttonAction={props.deleteButton}/> : null}

        </Card>
    )
}

ListItem.propTypes = {
    content: PropTypes.array.isRequired, // content prop is required and should be an array
    modifyButton: PropTypes.func, // modifyButton prop should be a function or null
    deleteButton: PropTypes.func, // deleteButton prop should be a function or null
    isDarkMode: PropTypes.bool // isDarkMode prop should be a boolean
  };

export default ListItem ;