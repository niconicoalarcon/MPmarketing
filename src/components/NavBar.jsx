import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png"; 

function Navbar() {
  return (
    <nav className={styles.navbar  }>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo MP Marketing" className={styles.logo} />
      </div>
      <div className={styles.navLinks}>
        <NavLink to="/" className={styles.link}>Home</NavLink>
        <NavLink to="/about" className={styles.link}>Sobre mí</NavLink>
        <NavLink to="/services" className={styles.link}>Servicios</NavLink>
        <NavLink to="/training" className={styles.link}>Capacitaciones</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
