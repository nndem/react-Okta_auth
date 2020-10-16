import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import AppWithRouterAccess from "./AppWithrouterAccess";

function App() {
  return (
    <Router>
      <AppWithRouterAccess/>
    </Router>
  );
}

export default App;
