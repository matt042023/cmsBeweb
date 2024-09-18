import React from 'react';
import PropTypes from 'prop-types';
import { SearchResult } from "./SearchResult";

const SearchResultsList = ({ results }) => {
    return (
        <div className="results-list">
            {results.map((result) => (
                <SearchResult result={result.username} key={result.id} /> // Utilisation d'une clé unique fournie par les données
            ))}
        </div>
    );
};

SearchResultsList.propTypes = {
    results: PropTypes.arrayOf(PropTypes.object).isRequired // Assurez-vous que results est un tableau d'objets
};

export default SearchResultsList;
