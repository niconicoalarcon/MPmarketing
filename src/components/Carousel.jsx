import { useState } from "react";
import styles from "../styles/Carousel.module.css";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prev} onClick={prevSlide}>&#10094;</button>
      <img src={images[current]} alt="carousel slide" className={styles.image} />
      <button className={styles.next} onClick={nextSlide}>&#10095;</button>
    </div>
  );
}

export default Carousel;
