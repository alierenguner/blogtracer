import React from 'react';

const RegisterForm = () => {
    return (
        <form className="register-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="register-name">Name</label>
            <input type="text" id="register-name" />

            <label htmlFor="register-username">Username</label>
            <input type="password" id="register-username" />

            <label htmlFor="register-email">Email</label>
            <input type="password" id="register-email" />
            
            <label htmlFor="register-password">Password</label>
            <input type="password" id="register-password" />

            <label htmlFor="register-confirm-password">Confirm Password</label>
            <input type="password" id="register-confirm-password" />

            <button type="submit">Login</button>
            <button type="button">Register</button>
        </form>
    )
}

export default RegisterForm;