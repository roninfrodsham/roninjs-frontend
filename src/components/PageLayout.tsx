import { motion } from "framer-motion";

type PageLayoutProps = {
  Component: React.ComponentType;
  slideBtnText: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  children: React.ReactNode;
};

function PageLayout({ Component, slideBtnText, setIsOpen, isOpen, children }: PageLayoutProps) {
  return (
    <div className='grow flex justify-center items-center'>
      <motion.button
        className='absolute bottom-6 lg:bottom-auto lg:top-6 right-6 bg-ronin-green-900 text-ronin-pink text-lg px-6 py-3 pb-2 font-bebas'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {slideBtnText}
      </motion.button>
      <div className='w-3/4 sm:w-1/2 xl:w-1/3 2xl:w-1/4'>
        <Component />
        {children}
      </div>
    </div>
  );
}

export { PageLayout };
