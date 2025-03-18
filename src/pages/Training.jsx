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
          <Link to="https://docs.google.com/presentation/d/1fzH4_O7K5gxycTikfnM-zmqjFbyQOW2t/edit?usp=sharing&ouid=109146175521013878770&rtpof=true&sd=true" target="_blank" className="button button-program">Programa</Link>
        </div>

        <div className="card">
          <img src="/img_cursos/2.png" alt="Propuesta 2" />
          <Link to="/form/2" className="button">Inscribirme</Link>
          <Link to="https://docs.google.com/presentation/d/1-_C40rf_rWyeNGIq4C0gYKknheOSAVa2/edit?usp=sharing&ouid=109146175521013878770&rtpof=true&sd=true" target="_blank" className="button button-program">Programa</Link>
        </div>

        <div className="card">
          <img src="/img_cursos/3.png" alt="Propuesta 3" />
          <Link to="/form/3" className="button">Inscribirme</Link>
          <Link to="https://docs.google.com/presentation/d/1SFSBBqH8NksX66JcgyOUbAkHVe0tQEpY/edit?usp=sharing&ouid=109146175521013878770&rtpof=true&sd=true" target="_blanck" className="button button-program">Programa</Link>
        </div>

        <div className="card">
          <img src="/img_cursos/4.png" alt="Propuesta 4" />
          <Link to="/form/3" className="button button-prox">Proximamente</Link>
          <Link to="[09:56, 17/3/2025] Bubu: https://docs.google.com/presentation/d/1SXqdlDMuwlvRndRI5DNnw8gLAXsCVKbr/edit?usp=sharing&ouid=109146175521013878770&rtpof=true&sd=true" target = "_blank" className="button button-program">Programa</Link>
        </div>
      </section>

      <Link to="/" className="back-button">Volver Atrás</Link>
    </div>
  );
}

export default Training;
