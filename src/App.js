import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Employee from "./component/Employee";
import EmployeeAdd from "./component/EmployeeAdd";
function App() {
  return (
    <div className="container">

      <Router>
        <div className="col-md-12">
          <h1 className="text-center" style={style}></h1>
          <Switch>
            <Route path="/" exact component={Employee}  />
            <Route path="/add" exact component={EmployeeAdd} />

            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const style = {
  color: "red",
  margin: "10px",
};

export default App;
