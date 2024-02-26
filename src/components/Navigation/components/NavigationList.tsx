import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { NavigationItems } from "../../../types";

type NavigationListProps = {
  navigationItems: NavigationItems;
  ariaLabel: string;
  classes: string;
};

const commonStyles = {
  backgroundColor: "#eeabce",
  color: "#00582b",
  scale: 1.1,
  width: "100%",
};

const whileHover = {
  ...commonStyles,
  transition: {
    duration: 0.01,
    type: "spring",
    stiffness: 300,
    damping: 30,
  },
};

const MotionComponent = motion(Link);

function NavigationList({ navigationItems, ariaLabel, classes }: NavigationListProps) {
  const location = useLocation().pathname;

  return (
    <nav className={classes} aria-label={ariaLabel}>
      <motion.ul className='text-2xl font-bebas'>
        {navigationItems.map((item) => (
          <motion.li key={item.id} className='mt-3'>
            <MotionComponent
              to={item.path}
              className='pt-3 pb-2 inline-block bg-ronin-green-900 text-ronin-pink'
              initial={{ originX: 0 }}
              animate={
                location === item.path
                  ? commonStyles
                  : { backgroundColor: "#00582b", color: "#eeabce", scale: 1, width: "auto" }
              }
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
