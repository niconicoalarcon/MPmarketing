import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Form from "./pages/Form";  
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styles from "./styles/App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Navbar />
        <main className={styles.content}>
          <Routes>
            {/*<Route path="/" element={<Home />} />*/}
            {/*<Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />*/}
            <Route path="/training" element={<Training />} />
            <Route path="/form/:id" element={<Form />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

