import { useState } from "react";
import { motion } from "framer-motion";
import BearDisplay from "../components/BearDisplay";

const ProposalPage = ({ onAccept }) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    // Generate random coordinates within a 300px radius
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    setNoPos({ x, y });
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[#fb6f92] mb-8">
        Dani, will you be my valentine?
      </h1>
      <BearDisplay type="hug" />
      <div className="flex gap-4 justify-center items-center mt-10">
        <button
          onClick={onAccept}
          className="bg-[#fb6f92] text-white px-10 py-4 rounded-2xl text-2xl font-bold shadow-lg cursor-pointer"
        >
          Yes
        </button>
        <motion.button
          animate={{ x: noPos.x, y: noPos.y }}
          onMouseEnter={moveButton}
          className="bg-white text-[#fb6f92] border-2 border-[#fb6f92] px-8 py-4 rounded-2xl text-xl font-bold"
        >
          No
        </motion.button>
      </div>
    </div>
  );
};

export default ProposalPage;
