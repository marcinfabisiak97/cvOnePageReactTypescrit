import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage";
import { SlideContext } from "./context/Contexts";
import "./App.scss";

function App() {
  const [expander, setExpander] = useState("");
  const [slideProject, setSlideproject] = useState(1);
  const [show, setShow] = useState(true);
  return (
    <SlideContext.Provider
      value={{
        slideProject,
        setSlideproject,
        expander,
        setExpander,
        show,
        setShow,
      }}
    >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Facebook" element={<Homepage />} />
        <Route path="/Linkedin" element={<Homepage />} />
      </Routes>
    </SlideContext.Provider>
  );
}

export default App;
