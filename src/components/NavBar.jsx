import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo MP Marketing" className={styles.logo} />
      </div>

      <button className={styles.menuButton} onClick={toggleMenu}>
        <span className={styles.menuIcon}>&#9776;</span>
      </button>
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
      <NavLink to="/Home" className={styles.link} onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/About" className={styles.link} onClick={toggleMenu}>
          Sobre Nosotros
        </NavLink>
        <NavLink to="/Services" className={styles.link} onClick={toggleMenu}>
          Nuestros servicios
        </NavLink>
        <NavLink to="/training" className={styles.link} onClick={toggleMenu}>
          Capacitaciones
        </NavLink>

      </div>
    </nav>
  );
}

export default Navbar;