import React from 'react';

const AsideMenu = () => {
    return (
        <ul className="aside-menu">
            <li className="title">ACCOUNT</li>
            <li className="button">
                <i className="far fa-heart"></i>
                <span>Likes</span>
            </li>
            <li className="button">
                <i className="far fa-bookmark"></i>
                <span>Saves</span>
            </li>
            <li className="button">
                <i className="far fa-chart-bar"></i>
                <span>Messages</span>
            </li>
            <li className="button">
                <i className="far fa-envelope"></i>
                <span>Statistics</span>
            </li>
            
            <li className="title">CONTENT</li>
            <li className="button">
                <i className="far fa-plus-square"></i>
                <span>Create</span>
            </li>
            <li className="button">
                <i className="far fa-chart-bar"></i>
                <span>Statistics</span>
            </li>
            <li className="button">
                <i className="far fa-th-large"></i>
                <span>Show All</span>
            </li>
        </ul>
    )
}

export default AsideMenu;