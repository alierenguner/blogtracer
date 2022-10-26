import React from 'react';
import { Route } from 'react-router';
// Layouts
import AuthLayout from '@/pages/layouts/auth-layout';
// Containers
import LoginContainer from '@containers//login-container';
import RegisterContainer from '@containers//register-container';

const authRoutes = [
    <Route key="auth-routes" element={<AuthLayout />}>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/register" element={<RegisterContainer />} />
    </Route>
] 

export default authRoutes;