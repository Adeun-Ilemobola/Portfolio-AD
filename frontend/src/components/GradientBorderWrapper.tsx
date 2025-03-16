import { motion } from "framer-motion";

const WaveBorderWrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative p-[3px]">
      {/* Animated Border */}
      <motion.div
        className="absolute block inset-0 rounded-md p-[1px]"
        style={{
          background: "linear-gradient(90deg, #0A192F, #1A2A4F, #FFFFFF, #1A2A4F, #0A192F)", // Navy to white wave effect
          backgroundSize: "300% 100%",
        }}
        animate={{ backgroundPositionX: ["1%", "100%", "1%"] }} // Moves like a wave
        transition={{ duration: 14, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }} // Smooth back and forth
      />

      {/* Inner content with a subtle border */}
      <div className="relative z-10 rounded-md bg-black p-2  border-gray-800">
        {children}
      </div>
    </div>
  );
};

export default WaveBorderWrapper;
