import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import Login from "./pages/Login.jsx";
// import Dashboard from "./pages/Dashboard.jsx"; // Uncomment later

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Keep BookList visible always */}
        <BookList />

        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
