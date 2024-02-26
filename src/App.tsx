import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

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
      <Header navOpen={navOpen} toggleNav={toggleNav} year={year} />
      <Outlet />
    </div>
  );
}

export default App;
