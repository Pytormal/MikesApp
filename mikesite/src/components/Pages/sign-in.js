import React from 'react'
import { Link, Route, Switch } from "react-router-dom"

import LoginForm from '../forms/LoginForm';

const SignIn = (props) => {
    return (
        <>
            <section className="login">
                <h1>
                    Login here
        </h1>
                <div>
                    <LoginForm />
                </div>
            </section>
            <section className="sign-up">
                <h1>
                        <Link to="/sign-up">Sign Up here</Link>
        </h1>
            </section>
           
        </>
    )
}
export default SignIn