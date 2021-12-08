import { Link, useNavigate } from "react-router-dom";
import React from "react";
import styles from "./TabLeft.module.scss";
export const TabLeft = () => {
  let navigate = useNavigate();
  const [active, setActive] = React.useState({
    home: true,
    about: false,
    contact: false,
  });

  const handleActive = (e: any) => {
    setActive({
      home: false,
      about: false,
      contact: false,
      [e.target.id]: true,
    });
    navigate(e.target.id);
  };

  return (
    <div className={styles.Parent}>
      <p
        id="home"
        onClick={handleActive}
        className={active.home ? styles.ActiveTab : styles.DefaultTab}
      >
        Home Page Hehe
      </p>
      <p
        id="about"
        onClick={handleActive}
        className={active.about ? styles.ActiveTab : styles.DefaultTab}
      >
        About Page Hehe
      </p>
      <p
        id="contact"
        onClick={handleActive}
        className={active.contact ? styles.ActiveTab : styles.DefaultTab}
      >
        Contact Page Hehe
      </p>
    </div>
  );
};
