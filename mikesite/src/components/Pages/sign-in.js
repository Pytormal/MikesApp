import React from 'react'
import { Link, Route, Switch } from "react-router-dom"

import LoginForm from './LoginForm';

import SignUp from "./sign-up"


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
                    <nav>
                        <Link to="/sign-up">Sign Up here</Link>
                        
                    </nav>   
        </h1>
            </section>
           
        </>
    )
}
export default SignIn