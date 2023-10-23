import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Import BrowserRouter, Route, and Switch
import Login from './Login/login';
import Checkout from './Checkout/checkout';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Switch> */}
          {/* <Route exact path="/" component={Login} /> Route for Login */}
          {/* <Route path="/checkout" component={Checkout} /> Route for Checkout */}
        {/* </Switch>
      </BrowserRouter> */}
      {/* <Checkout /> */}
      <Login />
    </div>
  );
}

export default App;