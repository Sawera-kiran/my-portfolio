import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const RotatingText = ({ texts = [], interval = 1500 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className="rotating-text">
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{
            y: 70,
            opacity: 0,
            filter: "blur(8px)",
          }}
          animate={{
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
          }}
          exit={{
            y: -70,
            opacity: 0,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RotatingText;
