import React from 'react';
import { Link, Route, Switch } from "react-router-dom"

import './components/css/reset.css'
import './App.css';
import './components/css/main.css';


import Home from './components/Pages/home'
import SignIn from './components/Pages/sign-in'
import SignUp from "./components/Pages/sign-up"

class App extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     task
  //   }
  // }

  render(props) {
    return (
      <>
        <div className="App">

          <header className="App-header">
            <section className="nav-bar">
             
              <div>
               
              </div>
              <nav>
                <Link to="/Sign-In">Sign In</Link>
               
                <Link to="/Home">Home</Link>
                <h1>
                  <a>Welcome to the Storefront</a>
                </h1>
                  <input className="Search" placeholder="Search here"></input>
              </nav>
              
              <Switch>
                <Route path="/sign-In">
                  <SignIn/>
                </Route>
                <Route path="/sign-up">
                  <SignUp />
                </Route>
                <Route path="/Home">
                  <Home /> 
                </Route>
              </Switch>

            </section>

               
            
          </header>
          <footer>
            Copyright
             <a>sitemap</a>
            <a>contact</a>
          </footer>
         
        </div>
      </>
    )
  }
}


export default App;
