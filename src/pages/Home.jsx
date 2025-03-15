import Carousel from "../components/Carousel";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <h1>Bienvenido a MP Marketing</h1>
      <p>Somos una agencia especializada en estrategias de marketing digital para potenciar tu negocio.</p>
      <Carousel />
    </div>
  );
}

export default Home;
