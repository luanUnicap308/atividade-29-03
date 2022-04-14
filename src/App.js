import React from "react";
import Home from "./pages/home";
import { Routes, Route, Link } from 'react-router-dom'
import About from "./pages/about";
import { ContextGetPerson } from "./context/contextGetPerson";

const App = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <ContextGetPerson.Provider value={{}} >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} >
          <Route path=":person" element={<About />}/>
        </Route>
      </Routes>
      </ContextGetPerson.Provider>
    </div>

  )
}
export default App;