import SearchBarContent from './SearchBarContent'
import SearchResultsList from "./SearchResultsList";
import { useState } from "react";
import './SearchBar.css'
import PropTypes from 'prop-types';

/**
 * @description                                     A searchbar 
 * 
 * @param {object}  props 
 * @param {boolean} isDarkMode  props.isDarkMode    Either true or false 
 * @param {string}  customWidth props.customWidth   Another width than the default 31.25rem one
 *  
 * @returns                                         The SearchBar component
 */

export default function SearchBar(props) {
    const [results, setResults] = useState([]);
    return (
        <div
            className="search-bar-container"
            style={{width:props.customWidth || '31.25rem'}}
            id={props.isDarkMode === true ? 'searchbardark':''} 
        >
          <SearchBarContent 
              setResults={setResults} 
              placeholder={props.placeholder}
          />
          {results && results.length > 0 && <SearchResultsList results={results} />}
        </div> //Displays results if string > 0
    );
}

SearchBar.propTypes = {
    isDarkMode: PropTypes.bool.isRequired, // isDarkMode prop is required and should be a boolean
    customWidth: PropTypes.string, // customWidth prop should be a string or undefined
    placeholder: PropTypes.string.isRequired // placeholder prop is required and should be a string
  };