import React from 'react';
import { Outlet } from 'react-router';
// Components
import Aside from '@components/aside';
import Header from '@components/header';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header />
            <div className="container">
                <Aside />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MainLayout;