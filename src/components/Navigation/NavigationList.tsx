import { motion } from "framer-motion";

type NavigationItems = {
  id: string;
  title: string;
  path: string;
}[];

function NavigationList({
  navigationItems,
  ariaLabel,
  classes,
}: {
  navigationItems: NavigationItems;
  ariaLabel: string;
  classes: string;
}) {
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
    <nav className={classes} aria-label={ariaLabel}>
      <motion.ul initial='hidden' animate='visible' transition={transition} className='text-2xl'>
        {navigationItems.map((item) => (
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
  );
}

export { NavigationList };
