import PropTypes from 'prop-types';

export const SearchResult = ({ result }) => {
    const handleClick = () => {
        alert(`Vous avez sélectionné ${result}`);
    };

    return (
        <button
            className="search-result"
            onClick={handleClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleClick();
                }
            }}
            onTouchStart={handleClick}
            tabIndex={0}
        >
            {result}
        </button>
    );
};

SearchResult.propTypes = {
    result: PropTypes.string.isRequired,
};
