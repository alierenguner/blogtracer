import authenticationApiService from '@/services/authentication/api-service';
import React from 'react';

const LoginForm = () => {
    const handleSubmit = () => {
        authenticationApiService.login({ 
            loginId: '',
            password: 'ae1234',
        })
    }

    return (
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="login-id">ID</label>
            <input type="text" id="login-id" />
            
            <label htmlFor="login-password">Password</label>
            <input type="password" id="login-password" />
            
            <button type="submit" onClick={handleSubmit}>Login</button>
            <button type="button">Register</button>
        </form>
    )
}

export default LoginForm;