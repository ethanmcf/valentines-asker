import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const SchedulerPage = ({ onConfirm }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const controls = useAnimation();

  const handleDateClick = async (day) => {
    if (day === 16) {
      setSelectedDay(day);
    } else {
      setSelectedDay(null); // Reset if they previously found it but then clicked a wrong one
      // Shake animation for the wrong date
      await controls.start({
        x: [-6, 6, -6, 6, 0],
        transition: { duration: 0.3 },
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white p-8 rounded-[2.5rem] shadow-xl border-4 border-[#ffb3c1] w-full max-w-sm text-center"
    >
      <h2 className="text-2xl font-bold text-[#fb6f92] mb-6">
        When are we going? 🧸
      </h2>

      <div className="mb-8">
        <p className="text-xs font-bold text-gray-400 mb-3 tracking-widest uppercase">
          February
        </p>
        <motion.div animate={controls} className="flex justify-center gap-2">
          {[14, 15, 16, 17].map((d) => {
            const isSelected = selectedDay === d;
            return (
              <button
                key={d}
                onClick={() => handleDateClick(d)}
                className={`w-12 h-12 rounded-full font-bold transition-all duration-200 cursor-pointer
                  ${
                    isSelected
                      ? "bg-[#fb6f92] text-white shadow-lg scale-110 rotate-3"
                      : "bg-pink-50 text-[#fb6f92] hover:bg-[#ffdae0] active:scale-90"
                  }`}
              >
                {d}
              </button>
            );
          })}
        </motion.div>
        {selectedDay === 16 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#fb6f92] text-xs mt-3 font-medium"
          >
            Perfect! That works for me too! ✨
          </motion.p>
        )}
      </div>

      <div className="space-y-4">
        <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">
          Pick a Time
        </p>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full p-4 rounded-2xl border-2 border-[#ffc2d1] text-[#fb6f92] font-bold focus:outline-none focus:ring-2 ring-[#fb6f92] appearance-none bg-pink-50/30 text-center"
        >
          <option value="">-- : --</option>
          <option value="18:00" disabled>
            6:00 PM (Practice)
          </option>
          <option value="20:30">8:30 PM (Perfect! ✨)</option>
          <option value="21:00" disabled>
            9:00 PM (Too late)
          </option>
        </select>
      </div>

      <button
        onClick={onConfirm}
        disabled={selectedDay !== 16 || selectedTime !== "20:30"}
        className={`w-full mt-8 py-4 rounded-2xl font-bold text-white transition-all duration-300
          ${
            selectedDay === 16 && selectedTime === "20:30"
              ? "bg-[#fb6f92] shadow-pink-200 shadow-xl hover:scale-105 active:scale-95"
              : "bg-gray-200 cursor-not-allowed"
          }`}
      >
        Lock it in! 💖
      </button>
    </motion.div>
  );
};

export default SchedulerPage;
