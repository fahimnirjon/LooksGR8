import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agency = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imgDivRef = useRef(null);
  const imgRef = useRef(null);

  const imgArray = [
    "/public/images/Carl_480x640.jpg",
    "/public/images/CAMILLE_480X640_2.jpg",
    "/public/images/ChantalG_480x640.jpg",
    "/public/images/joel_480X640_3.jpg",
    "/public/images/MEGGIE_480X640_2.jpg",
    "/public/images/MEL_480X640.jpg",
    "/public/images/Michele_480X640.jpg",
    "/public/images/Olivier_480x640.jpg",
  ];

  useGSAP(function () {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: "top 30%",
        end: "top -70%",
        pin: true,
        onUpdate: (elem) => {
          let imgIndex;

          if (elem.progress < 1) {
            imgIndex = Math.floor(elem.progress * imgArray.length);
          } else {
            imgIndex = imgArray.length - 1;
          }

          imgRef.current.src = imgArray[imgIndex];
        },
      },
    });
  });

  return (
    <div>
      <div className="section1">
        <div
          ref={imgDivRef}
          className="absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl top-96 left-[30vw]"
        >
          <img
            ref={imgRef}
            className="h-full w-full object-cover"
            src="/public/images/Carl_480x640.jpg"
            alt=""
          />
        </div>

        <div className="relative font-[font2]">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              SEVEN7Y <br />
              TWO
            </h1>
            <div className="pl-[40%]">
              <p className="text-6xl">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                We’re inquisitive and open-minded, and we make sure creativity
                crowds out ego from every corner. A brand is a living thing,
                with values, a personality and a story. If we ignore that, we
                can achieve short-term success, but not influence that goes the
                distance. We bring that perspective to every brand story we help
                tell.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agency;
