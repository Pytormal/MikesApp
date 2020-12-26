import React from 'react'


const Header = (props) => {
    return (
        <>
            <section className="header">
                <nav>
                    <Link to="/Sign-In">Sign In</Link>
                    <Link to="/Revamp">Home</Link>
                    <Link to="/Shop">Shop</Link>
                    <h1>
                        <a>Welcome to the Storefront</a>
                    </h1>
                    <input className="Search" placeholder="Search here"></input>
                </nav>
            </section>
        </>
    )
}

export default Header

