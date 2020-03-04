import React from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import EmployeeTable from "./pages/employeeTable/EmployeeTable";
import EmployeeProfile from "./pages/employeeProfile/EmployeeProfile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <EmployeeTable />
        </Route>
        <Route path="/profile/:id">
          <EmployeeProfile />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
