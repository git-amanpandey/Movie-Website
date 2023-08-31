import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Error from "./Error";
 import "./App.css";
import "./ErrorPage.css";
import Default from "./Xyz/Default";
import "./Xyz/Style.css";

const App = () => {
  return (
    <Routes>
      <Route  exact path="/" element={<Default/>}/>
      <Route exact path="/home" element={<Home />} />
      <Route path="/movie/:id" element={<SingleMovie />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App