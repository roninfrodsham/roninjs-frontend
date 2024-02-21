import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "./Components/Navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./App.css";

function App() {
  const [navOpen, setNavOpen] = useState(false);

  const date = new Date();
  const year = date.getFullYear();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header>
      <div
        className={`${
          navOpen ? "flex flex-col" : "hidden"
        } fixed top-0 left-0 w-screen lg:w-72 h-dvh lg:flex lg:flex-col bg-ronin-green`}
      >
        <div className='p-6 flex flex-row items-center'>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            className='grow text-5xl text-ronin-pink'
          >
            RONIN JS
          </motion.h1>
          <button onClick={toggleNav}>
            <XMarkIcon className='w-10 h-10 text-ronin-pink lg:hidden' />
          </button>
        </div>
        <Navigation />
        <p className='p-6 text-ronin-pink'>Copyright {year} RONINJS LTD.</p>
      </div>
      <div className='lg:hidden p-6 flex flex-row items-center'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className='grow text-5xl text-ronin-green'
        >
          RONIN JS
        </motion.h1>
        <button onClick={toggleNav}>
          <Bars3Icon className='w-10 h-10 text-ronin-green' />
        </button>
      </div>
    </header>
  );
}

export default App;
