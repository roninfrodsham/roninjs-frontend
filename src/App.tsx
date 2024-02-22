import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { Navigation } from "./components";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import "./App.css";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className='flex flex-col lg:flex-row h-screen'>
      <header>
        <div
          className={`${
            navOpen ? "flex flex-col" : "hidden"
          } fixed w-screen lg:w-72 h-screen lg:relative lg:flex lg:flex-col bg-ronin-green-900`}
        >
          <div className='p-6 pt-8 flex flex-row items-center'>
            <Link to='/' className='grow text-5xl text-ronin-pink'>
              RONIN JS
            </Link>
            <button onClick={toggleNav}>
              <XMarkIcon className='w-10 h-10 text-ronin-pink lg:hidden' />
            </button>
          </div>
          <Navigation />
          <p className='p-6 text-ronin-pink'>Copyright {year} RONINJS LTD.</p>
        </div>
        <div className='lg:hidden p-6 pt-8 flex flex-row items-center bg-ronin-green-900'>
          <Link to='/' className='grow text-5xl text-ronin-pink'>
            RONIN JS
          </Link>
          <button onClick={toggleNav}>
            <Bars3Icon className='w-10 h-10 text-ronin-pink' />
          </button>
        </div>
      </header>
      <div className='grow flex justify-center items-center'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
