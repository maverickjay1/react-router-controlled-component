import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ControlledInput from "./ControlledInput";
import Counter from "./Counter";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Controlled Input</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<ControlledInput />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
