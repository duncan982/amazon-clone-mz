import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

import Home from "./Home";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Header from "./Header";

// function App() {
//   return (
//     <div className="app">
//       <Header />
//       <Router>
//         <Routes>
//           <Route>
//             <Route path="/" element={<Home />} />
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {" "}
        // You don't *have* to wrap the Outlet in a main tag, but I am doing, to
        save having to remember to do it in each component
        <Outlet />
      </main>
    </div>
  );
}

export default App;
