import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { RiDownloadLine } from "react-icons/ri";
import { MdDownloadDone } from "react-icons/md";
// animation
import { motion } from "framer-motion";

function Card({ cardInfo, foregroundConstraint }) {
  return (
    <motion.div 
      drag 
      dragConstraints= {foregroundConstraint} 
      whileDrag= {{scale: 1.2}}
      dragElastic = {0.1} 
      dragTransition={{ bounceStiffness: 800, bounceDamping: 20 }}
      className="Card relative flex flex-col items-left gap-3 h-72 w-60 bg-zinc-900 text-white rounded-[45px] px-5 py-9 m-2 text-base overflow-hidden cursor-pointer"
    >
      {/* icon */}
      <FaRegFileLines />
      {/* description */}
      <p className="leading-tight">{cardInfo.desc}</p>
      {/* footer */}
      <div className="Footer flex flex-col justify-center absolute left-0 bottom-0 h-20 w-full">
        <div className="flex justify-between px-5 text-sm">
          {/* doc size   */}
          <h5>{cardInfo.docSize}</h5>
          {/* button */}
          <div className="Button rounded-full p-1 bg-zinc-600 hover:bg-zinc-500 text-white">
            {cardInfo.downloaded === "false" && <RiDownloadLine />}
            {cardInfo.downloaded === "true" && <MdDownloadDone />}
          </div>
        </div>

        {/* Rectangle */}
        {cardInfo.hasRectangle && (
          <div className="Rectangle w-full h-12 bg-[#92ADDA] mt-4 justify-center flex items-center text-black font-semibold cursor-pointer">
            {cardInfo.cta}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
