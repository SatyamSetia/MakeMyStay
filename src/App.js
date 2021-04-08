import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import PropertyList from "./components/property-list/property-list";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <div className="App_content">
          <Switch>
            <Route path="/properties">
              <PropertyList/>
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
