import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavigationItems } from "../../types";

type NavigationListProps = {
  navigationItems: NavigationItems;
  ariaLabel: string;
  classes: string;
};

const whileHover = {
  width: "100%",
  backgroundColor: "#eeabce",
  scale: 1.1,
  color: "#00582b",
  transition: {
    duration: 0.01,
    type: "spring",
    stiffness: 300,
    damping: 30,
  },
};

const MotionComponent = motion(Link);

function NavigationList({ navigationItems, ariaLabel, classes }: NavigationListProps) {
  return (
    <nav className={classes} aria-label={ariaLabel}>
      <motion.ul className='text-2xl'>
        {navigationItems.map((item) => (
          <motion.li key={item.id} className='mt-3'>
            <MotionComponent
              to={item.path}
              className='pt-3 pb-2 inline-block bg-ronin-green-900 text-ronin-pink'
              whileHover={whileHover}
            >
              <span className='px-6'>{item.title}</span>
            </MotionComponent>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}

export { NavigationList };
