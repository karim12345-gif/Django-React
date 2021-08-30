import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BillList from "./components/BillList";
import Items from "./components/Items";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Items} />
          <Route exact path="/bills" component={BillList} />
          <Route exact path="/bills/:id" component={BillList} />
        </Switch>
     
      </div>
    </Router>
  );
}

export default App;
