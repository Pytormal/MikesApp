import React from 'react'
import RegisterForm from '../forms/RegisterForm';

const SignUp = (props) => {
    return (
        <>
            <section className="register">
                <h1>
                    Register here
        </h1>
                <div>   <RegisterForm />
                </div>
            </section>
            
        </>
    )
}
export default SignUp