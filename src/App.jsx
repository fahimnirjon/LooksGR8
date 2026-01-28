import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Projects from "./pages/Projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

const App = () => {

  const stairRef = useRef(null);

  useGSAP(function () {
    const tl = gsap.timeline();

    // GSAP animations can be added here
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stair",{
      y: '100%',
      stagger: {
        amount: -0.25,
    }})
  });

  return (
    <div className="text-white">
      <div ref={stairRef} className="h-screen w-full fixed z-20 top-0">
        <div className="h-full w-full flex">
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
      </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
