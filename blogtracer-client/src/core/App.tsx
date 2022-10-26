import '@styles/main.scss';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Routes } from 'react-router';
// Routes
import mainRoutes from '@/routes/main-routes';
import authRoutes from '@/routes/auth-routes';
import appApiService from '@/services/app/api-service';

const App = () => {
    appApiService.getToken();
    
    return (
        <Routes>
            {mainRoutes}
            {authRoutes}
        </Routes>
    )
}

export default hot(module)(App);