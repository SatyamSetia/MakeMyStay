import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      make my stay
      <Router>
        <div>
          <Switch>
            <Route path="/about">
              <div>about</div>
            </Route>
            <Route path="/users">
              <div>users</div>
            </Route>
            <Route path="/">
              <div>root</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
