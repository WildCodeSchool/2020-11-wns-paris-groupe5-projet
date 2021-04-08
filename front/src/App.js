import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu1 from "./Component/Menu1";
import Login from "./Component/Login";
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

  console.log("getStoredData", getStoredData);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/registrationForm" exact component={RegistrationForm} />
          <Route path="/" exact component={Menu1} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppParrent;
