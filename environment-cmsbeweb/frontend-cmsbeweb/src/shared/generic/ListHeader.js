import React from 'react';
import Card from 'react-bootstrap/Card';
import './ListHeader.css';
import PropTypes from 'prop-types';

/**
 * @description                             Card used as header for a list. Similar to an HTML <th> </th>.                           
 * 
 * @param {object}          props 
 * @param {array}           content         props.content       Array with each element to display on the line
 * @param {null | any }     modifyButton    props.modifyButton  If not null, will leave space to take into acount the preseance of a button
 * @param {null | any }     deleteButton    props.deleteButton  If not null, will leave space to take into acount the preseance of a button
 * 
 * @returns                                 ListHeader component
 */


function ListHeader(props){

    // If modifyButton and/or deleteButton are not null, leaves a space to take them into account for display
    let buttonSpaceOne  = props.modifyButton !== null ? '3.125rem' : '';
    let buttonSpaceTwo  = props.deleteButton !== null ? '3.125rem' : '';

    return ( 
        <Card className='ListHeader headerText' style={{gridTemplateColumns:`repeat(${props.content.length} , 1fr) ${buttonSpaceOne} ${buttonSpaceTwo}`}}>
            
            {props.content.map(function(data) {
                return (
                    <p key={data} className='headerText'>
                        {data}
                    </p>
                )
            })}    

        </Card>
    )
}

ListHeader.propTypes = {
    content: PropTypes.array.isRequired, // content prop is required and should be an array
    modifyButton: PropTypes.any, // modifyButton prop can be null or any type
    deleteButton: PropTypes.any // deleteButton prop can be null or any type
  };

export default ListHeader ;
