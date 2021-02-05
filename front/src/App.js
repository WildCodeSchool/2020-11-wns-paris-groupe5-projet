import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Menu1 from './Component/Menu1';
import Login from './Component/Login';
import RegistrationForm from './Component/RegistrationForm';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/registrationForm" component={RegistrationForm} />
          <Route path="/menu1" component={Menu1} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;