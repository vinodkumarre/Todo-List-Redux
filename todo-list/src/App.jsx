import "./App.css";
import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import { gapi } from "gapi-script";
import Home from "./Components/home";
import Login from "./Components/Login";

const clientId = "276668573212-m1i25rgep0dbc3b8vj3gd89ulk08pjal.apps.googleusercontent.com";

function App() {
  const [isLog, setIsLog] = useState();
  const hg = (rev) => {
    setIsLog(rev);
  };
  useEffect(() => {
    function start() {
      gapi.client.int({
        clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<Login tor={hg} />}
        />
        <Route
          exact
          path="/home"
          element={<Home cor={isLog} />}
        />
      </Routes>
    </div>
  );
}

export default App;
