import './App.css';
import { BrowserRouter, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from "./Component/Home";
import RegistrationForm from "./Component/RegistrationForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/registrationForm" component={RegistrationForm} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;