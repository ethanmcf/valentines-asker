import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import BearDisplay from "../components/BearDisplay";

const SuccessPage = () => {
  useEffect(() => {
    // Fire confetti on load
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#fb6f92", "#ffb3c1"],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#fb6f92", "#ffb3c1"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-center"
    >
      <BearDisplay type="celebrate" />
      <h1 className="text-5xl font-black text-[#fb6f92] mt-6 drop-shadow-sm">
        IT'S A DATE! 💖
      </h1>
      <div className="mt-6 bg-white/50 p-6 rounded-3xl border-2 border-dashed border-[#ffb3c1]">
        <p className="text-[#fb6f92] text-xl font-bold">Feb 16th @ 8:30 PM</p>
        <p className="text-pink-400 mt-2 italic text-sm">Dress cute mc! </p>
      </div>

      <motion.p
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-8 text-pink-300 text-sm font-medium"
      >
        (There's no going back now)
      </motion.p>
    </motion.div>
  );
};

export default SuccessPage;
