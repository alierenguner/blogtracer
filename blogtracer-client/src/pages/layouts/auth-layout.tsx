import React from 'react';
import { Outlet } from 'react-router';
// Components
import AuthBanner from '@components/auth-banner';

const AuthLayout = () => {
    return (
        <div className="auth-layout">
            <div className="slider">
                <AuthBanner />
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
        </div>
    )
}

export default AuthLayout;