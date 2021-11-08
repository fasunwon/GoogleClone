import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ResultsContentProvider } from "./ResultsContentProvider";
ReactDOM.render(
  <Router>
    <ResultsContentProvider>
      <App />
    </ResultsContentProvider>
  </Router>,

  document.getElementById("root")
);
