import "./Training.css";
import { Link } from "react-router-dom";

function Training() {
  return (
    <div>
      <header>
        <h1>Capacitaciones disponibles</h1>
      </header>

      <section className="cards-container">
        <div className="card">
          <img src="/img_cursos/1.png" alt="Propuesta 1" />
          <Link to="/form/1" className="button">Inscribirme</Link>
        </div>

        <div className="card">
          <img src="/img_cursos/2.png" alt="Propuesta 2" />
          <Link to="/form/2" className="button">Inscribirme</Link>
        </div>

        <div className="card">
          <img src="/img_cursos/3.png" alt="Propuesta 3" />
          <Link to="/form/3" className="button">Inscribirme</Link>
        </div>

        <div className="card">
          <img src="/img_cursos/4.png" alt="Propuesta 4" />
          <Link to="/form/3" className="button button-prox">Proximamente</Link>
        </div>
      </section>

      <Link to="/" className="back-button">Volver Atrás</Link>
    </div>
  );
}

export default Training;
