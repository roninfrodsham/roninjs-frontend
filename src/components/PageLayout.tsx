import { motion } from "framer-motion";

function PageLayout({ Component }: { Component: React.FunctionComponent }) {
  return (
    <div className='grow flex justify-center items-center'>
      <motion.button className='absolute top-6 right-6 bg-ronin-green-900 text-ronin-pink text-2xl px-6 py-2'>
        Info
      </motion.button>
      <div className='w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/4'>
        <Component />
      </div>
    </div>
  );
}

export { PageLayout };
