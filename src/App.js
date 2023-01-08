import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {" "}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
