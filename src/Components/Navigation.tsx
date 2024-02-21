import { motion } from "framer-motion";

type NavigationItems = {
  id: string;
  title: string;
  path: string;
}[];

function Navigation() {
  const PRIMARY_NAV_ITEMS: NavigationItems = [
    {
      id: "nav-item-1",
      title: "Synthesiser",
      path: "/",
    },
    {
      id: "nav-item-2",
      title: "Simon Memory Game",
      path: "/",
    },
    {
      id: "nav-item-3",
      title: "React Chess",
      path: "/",
    },
    {
      id: "nav-item-4",
      title: "Kabuto Masks",
      path: "/",
    },
  ];

  const SECONDARY_NAV_ITEMS: NavigationItems = [
    {
      id: "sec-nav-item-1",
      title: "Information",
      path: "/",
    },
  ];

  const navItemVariants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const transition = {
    duration: 0.5,
    staggerChildren: 0.1,
    type: "spring",
    stiffness: 130,
    damping: 15,
  };

  const whileHover = {
    width: "100%",
    backgroundColor: "#eeabce",
    color: "#00582b",
    transition: {
      duration: 0.01,
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  };

  return (
    <>
      <nav className='py-6 grow' aria-label='primary'>
        <motion.ul initial='hidden' animate='visible' transition={transition} className='text-2xl'>
          {PRIMARY_NAV_ITEMS.map((item) => (
            <motion.li key={item.id} className='mt-3' variants={navItemVariants}>
              <motion.a
                href={item.path}
                className='py-2 inline-block bg-ronin-green text-ronin-pink'
                whileHover={whileHover}
              >
                <span className='px-6'>{item.title}</span>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
      <nav className='py-6' aria-label='secondary'>
        <motion.ul initial='hidden' animate='visible' transition={transition} className='text-2xl'>
          {SECONDARY_NAV_ITEMS.map((item) => (
            <motion.li key={item.id} variants={navItemVariants} className='mt-3'>
              <motion.a
                href={item.path}
                className='py-2 inline-block bg-ronin-green text-ronin-pink'
                whileHover={whileHover}
              >
                <span className='px-6'>{item.title}</span>
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </>
  );
}

export { Navigation };
