import React, { useState } from 'react';
import './SidebarLeftNavigation.css';
import PropTypes from 'prop-types';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const SidebarLeftNavigation = ({ items, isDarkMode }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar-left ${isOpen ? '' : 'closed'} ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            {isOpen && (
                <div className="content">
                    <h5 className="pages-list-title">Navigation</h5>
                    <ul className="pages-list">
                        {items.map((item) => (
                            <div className={`pages-bubble ${isDarkMode ? 'dark-mode' : 'light-mode'}`} key={item.url}>
                                <NavLink to={item.url} className="nav-link">{item.label}</NavLink>
                            </div>
                        ))}
                    </ul>
                </div>
            )}
            <div className="button-container">
                <button className={`toggle-btn ${isDarkMode ? 'dark-mode' : ''}`} onClick={toggleSidebar}>
                    {isOpen ? <BsArrowLeft /> : <BsArrowRight />}
                </button>
            </div>
        </div>
    );
};

SidebarLeftNavigation.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    isDarkMode: PropTypes.bool.isRequired
};

export default SidebarLeftNavigation;
