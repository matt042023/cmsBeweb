import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

const SearchBarContent = (props) => {
    const [input, setInput] = useState("");
    const [clientsList, setClientsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const resultsListRef = useRef(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((json) => {
                setClientsList(json);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (resultsListRef.current && !resultsListRef.current.contains(event.target)) {
                props.setResults([]); // Cacher la liste de résultats
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [props]);

    const handleChange = (value) => {
        setInput(value);
        const dataFilter = clientsList.filter(client => client.username.toLowerCase().includes(value.toLowerCase()));
        props.setResults(dataFilter);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <div>
                Error: {error}
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        );
    }

    return (
        <form>
            <div className="input-group rounded-pill">
                <button type="button" className="btn">
                    <i className="bi-search"/>
                </button>
                <input
                    placeholder={props.placeholder}
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </div>
            <div ref={resultsListRef}>
            </div>
        </form>
    );
};

SearchBarContent.propTypes = {
    placeholder: PropTypes.string.isRequired,
    setResults: PropTypes.func.isRequired
};

export default SearchBarContent;
