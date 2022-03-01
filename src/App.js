import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
