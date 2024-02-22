import { Link } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type HeaderProps = {
  navOpen: boolean;
  toggleNav: () => void;
  year: number | null;
};

function Header({ navOpen, toggleNav, year }: HeaderProps) {
  return (
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
  );
}

export { Header };
