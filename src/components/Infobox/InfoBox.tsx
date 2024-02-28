import { motion } from "framer-motion";

type InfoBoxProps = {
  children: React.ReactNode;
  isOpen: boolean;
};

function InfoBox({ children, isOpen }: InfoBoxProps) {
  return (
    <motion.div
      initial={{ width: 500, x: 500 }}
      animate={{ x: isOpen ? 0 : 500 }}
      transition={{ type: "ease-in-out", duration: 0.3 }}
      className='absolute z-20 top-0 right-0 h-screen bg-ronin-green-900'
    >
      <div className='flex flex-col h-screen py-8 px-6'>{children}</div>
    </motion.div>
  );
}

export { InfoBox };
