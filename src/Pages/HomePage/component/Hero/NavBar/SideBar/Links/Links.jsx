import { motion } from "framer-motion";
import style from "../sideBar.module.css";
import React from "react";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ state, handleClick }) => {
  const items = [
    { title: "Home", url: "/" },
    { title: "Corporate Trips", url: "/corporate-trips" },
    {
      title: "Group Trips ▼",
      subLinks: [
        { title: "Mumbai", url: "/group-trips/mumbai" },
        { title: "Goa", url: "/group-trips/goa" },
        { title: "Pachmarhi", url: "/group-trips/panchmarhi" },
        { title: "Udaipur", url: "/group-trips/udaipur" },
      ],
    },
    { title: "About", url: "/about" },
  ];

  const [showGroupTrips, setShowGroupTrips] = React.useState(false);

  return (
    <motion.div
      className={style.links}
      variants={variants}
      animate={state ? "open" : "close"}
    >
      {items.map((item) => (
        <React.Fragment key={item.title}>
          <motion.a
            href={item.url}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              item.subLinks ? setShowGroupTrips((prev) => !prev) : handleClick()
            }
          >
            {item.title}
          </motion.a>
          {item.subLinks && showGroupTrips && (
            <motion.div
              className={style.subMenu}
              variants={variants}
              animate={showGroupTrips ? "open" : "close"}
            >
              {item.subLinks.map((subItem) => (
                <motion.a
                  key={subItem.title}
                  href={subItem.url}
                  variants={itemVariants}
                  className={style.subLink}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClick}
                >
                  {subItem.title}
                </motion.a>
              ))}
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default Links;
