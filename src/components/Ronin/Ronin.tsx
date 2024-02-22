import { motion } from "framer-motion";
import { HatTop, HatBack, HatFront, MaskOne } from "./components";

// consider moving these to a shared file if we get more than one animation
const hatVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 0.5,
      type: "tween",
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
};

const maskVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 160,
      damping: 12,
    },
  },
};

function Ronin() {
  return (
    <motion.svg
      viewBox='0 0 309.9 259'
      className='ronin-mask'
      variants={hatVariants}
      initial='hidden'
      animate='visible'
    >
      <HatBack />
      <motion.g variants={maskVariants}>
        <MaskOne />
      </motion.g>
      <HatFront />
      <HatTop />
    </motion.svg>
  );
}

export { Ronin };
