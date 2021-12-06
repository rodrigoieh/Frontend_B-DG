import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import "mapbox-gl/dist/mapbox-gl.css";
import DatagenContext from "./components/context/DatagenContext";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <DatagenContext>
      <Router>
        <App />
      </Router>
    </DatagenContext>
  </React.StrictMode>,
  document.getElementById("root")
);
