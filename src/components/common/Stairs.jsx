import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import React, { useRef } from "react";

const Stairs = () => {
  const stairRef = useRef(null);
  useGSAP(function () {
    const tl = gsap.timeline();

    // GSAP animations can be added here
    tl.to(stairRef.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairRef.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    });
  });
  return (
    <div ref={stairRef} className="h-screen w-full fixed z-20 top-0">
      <div className="h-full w-full flex">
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
      </div>
    </div>
  );
};

export default Stairs;
