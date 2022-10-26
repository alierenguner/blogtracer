import authenticationApiService from '@/services/authentication/api-service';
import Input from '@common-components/input';
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
            <Input title="ID" input={{ className: 'p-input' }} />
            <Input title="Password" input={{ className: 'p-input', type: 'password' }} />
            
            <button type="submit" onClick={handleSubmit}>Login</button>
            <button type="button">Register</button>
        </form>
    )
}

export default LoginForm;