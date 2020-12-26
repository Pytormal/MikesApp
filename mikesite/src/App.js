import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom"


import './components/css/reset.css'
import './App.css';
import './components/css/main.css';




import Home from './components/header.js/home'
import SignIn from './components/header.js/sign-in'
import SignUp from "./components/header.js/sign-up"

import Shop from "./components/header.js/shop"
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

          <header className="App-header">
            <section className="nav-bar">
             
              <div>
               
              </div>
             
              
              <Switch>
                <Route path="/sign-In">
                  <SignIn/>
                </Route>
                <Route path="/sign-up">
                  <SignUp />
                </Route>
                <Route path="/shop/:itemId">
                  <Item items={product} />
                  </Route>
                <Route path="/shop">
                    <Shop items={product}/>
                </Route>
                <Route path="/">
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
// }


// export default App;
