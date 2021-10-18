import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import SearchResults from "./Components/SearchResults/SearchResults";
import SearchPage from "./Pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            {/* <SearchResults /> */}
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
