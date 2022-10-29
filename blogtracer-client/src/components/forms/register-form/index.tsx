import Input from '@common-components/input';
import React from 'react';

const RegisterForm = () => {
    return (
        <form className="register-form" onSubmit={(e) => e.preventDefault()}>
            <Input title="Name" input={{ className: 'p-input', type: 'text' }} />
            <Input title="Username" input={{ className: 'p-input', type: 'text' }} />
            <Input title="Mail Address" input={{ className: 'p-input', type: 'text' }} />
            <Input title="Password" input={{ className: 'p-input', type: 'password' }} />
            <Input title="Confirm Password" input={{ className: 'p-input', type: 'password' }} />

            <button type="submit" className="p-button">Register</button>
            <button type="button" className="t-button">Login</button>
        </form>
    )
}

export default RegisterForm;