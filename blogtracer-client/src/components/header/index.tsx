import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src="" alt="" />
                <span>BLOGTRACER</span>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to={'/'}>
                            <i className="far fa-home"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/discover'}>
                            <i className="far fa-books"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/follow-list'}>
                            <i className="far fa-star"></i>
                        </Link>
                    </li>
                    <li>
                        <i className="far fa-search"></i>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;