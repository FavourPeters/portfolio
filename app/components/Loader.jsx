"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (!isLoading) {
          document.body.style.overflow = "auto";
        }
      }}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-main
        ${isLoading ? "" : "pointer-events-none"}`}
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-16 mb-4 border-4 border-basic border-t-transparent rounded-full animate-spin"
        />
      </div>
    </motion.div>
  );
};

export default Loader;
