import React from "react";
import Video from "./Video";

const HomeHero = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="uppercase text-[9vw] leading-[8vw] flex items-center justify-center">L'étincelle</div>
      <div className="uppercase text-[9vw] leading-[8vw] flex items-center justify-center">
        qui <div className="h-[7vw] rounded-full overflow-hidden mx-2 -mt-5 w-[14vw]">
            <Video/>
            </div> génère
      </div>
      <div className="uppercase text-[9vw] leading-[8vw] flex items-center justify-center">la créativité</div>
    </div>
  );
};

export default HomeHero;
