import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./Component/Home";
import RegistrationForm from "./Component/RegistrationForm";
import Space from "./Component/Socket/Home/Space"
import Chat from "./Component/Socket/Chat/Chat"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/" exact component={Home} /
          <Route path="/registrationForm" component={RegistrationForm} />
          <Route exact path="/:roomId" component={Space} />
          <Route exact path="/chat" component={Chat} /> */}
          <Route exact path="/chat" component={Space} />
          <Route exact path="/room/:roomId" component={Chat} />
          <Route path="/" exact component={Home} />
          <Route path="/registrationForm" component={RegistrationForm} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;