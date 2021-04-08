import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./Component/Menu";
import Login from "./Component/Login";
import Logout from "./Component/Logout";
import RegistrationForm from "./Component/RegistrationForm";
import { AuthProvider } from "./hooks/context";
import { useAuthContexts } from "./hooks/context";

const AppParrent = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
function App() {
  const { getStoredData } = useAuthContexts();

  useEffect(() => {
    getStoredData();
  }, []);

  return (
    <div>
      <BrowserRouter>
       <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/registrationForm" exact component={RegistrationForm} />
        <Route path="/" component={Menu} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppParrent;
