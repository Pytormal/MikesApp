import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom"


import './components/css/reset.css'
import './App.css';
import './components/css/main.css';
import './components/css/login.css';
import './components/css/header.css'


import Home from './components/Pages/home'
import SignIn from './components/Pages/sign-in'
import SignUp from "./components/Pages/sign-up"

import Shop from "./components/Pages/shop"
import Item from "./components/dummy-data/dummy-item"
import data from "./components/dummy-data/dummy-store"

export default function App() {
  const [product] = useState(data);

  // class App extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {

  //   }
  // }

  // render(props) {

  return (
    <>
      <div className="App">

        <section className="nav-bar">
          <ul>
            <section className="title-nav">

            
            <nav>
              <Link to="/Sign-In">Sign In</Link>
              <Link to="/">Home</Link>
                <Link to="/Shop">Shop</Link>
             <input placeholder="Search Here"></input>
            </nav>   
</section>
          </ul>
        </section>


    <section className="body">
            <Switch>
              <Route path="/sign-In">
                <SignIn />
              </Route>
              <Route path="/sign-up">
                <SignUp />
              </Route>
              <Route path="/shop/:itemId">
                <Item items={product} />
              </Route>
              <Route path="/shop">
                <Shop items={product} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>

          </section>



        <footer>
          Copyright
             <a>sitemap</a>
          <a>contact</a>
        </footer>

      </div>
    </>
  )
}
// }


// export default App;
