import React, { useEffect, useState } from "react";
import Home from "./pages/home";
import { Routes, Route, Link } from 'react-router-dom'
import About from "./pages/about";

const App = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} >
          <Route path=":person" element={<About />}/>
        </Route>
      </Routes>
    </div>

  )
}
export default App;