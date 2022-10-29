import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const profile = 'https://media-exp1.licdn.com/dms/image/C4D03AQEuO8l3XnYfgQ/profile-displayphoto-shrink_200_200/0/1654377989024?e=2147483647&v=beta&t=De8cyzHb-7C3CKewdcYWClLZo5CLSoRd7xJ9WuF_REo';

    return (
        <header>
            <div className="logo">
                <img src="" alt="" />
                <span>BLOGTRACER</span>
            </div>
            <div className="menu">
                <ul className="left-menu">
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

                <ul className="right-menu">
                    <li className="account-dropdown">
                        <img src={profile} alt="" />

                        <div className="dropdown">
                            <div>
                                Logout
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;