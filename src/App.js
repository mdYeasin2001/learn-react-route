import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from './components/User/User';
import NotMatch from './components/NotMatch/NotMatch';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/users">
          <User/>
        </Route>
        <Route path="/users/:id">
          <UserDetails/>
        </Route>
        <Route exact path="/">
          <User/>
        </Route>
        <Route path="*">
          <NotMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
