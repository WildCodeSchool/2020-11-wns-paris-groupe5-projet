import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Menu1 from "./Component/Menu1";
import Login from "./Component/Login";
import RegistrationForm from "./Component/RegistrationForm";
import { AuthProvider } from "./hooks/context";

function App() {
  return (
    <AuthProvider>
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/registrationForm" exact component={RegistrationForm} />
            <Route path="/" exact component={Menu1} />
          </Switch>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
