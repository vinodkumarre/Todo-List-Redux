import "./App.css";
import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Components/home";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<Login />}
        />
        <Route
          exact
          path="/home"
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
