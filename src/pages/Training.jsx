import  "./Training.css";
function Training() {
    return (
      <div>
  <header>
        <h1>Capacitaciones disponibles</h1>
    </header>

    <section className="cards-container">
        <div className="card">
            <img src="img_cursos/1.png" alt="Propuesta 1"/>
            <a href="https://forms.gle/T8aBVCrU2cs3P5Lk6" target="_blanck" className="button">Inscribirme</a>
        </div>

        <div class="card">
            <img src="img_cursos/2.png" alt="Propuesta 2"/>
            <a href="https://forms.gle/pEMf7UR6e3myfJW49" target="_blank" className="button">Inscribirme</a>
        </div>

        <div class="card">
            <img src="img_cursos/3.png" alt="Propuesta 3"/>
            <a href="https://forms.gle/Kbh7NUZPYFff8euB7" target="_blank" className="button">Inscribirme</a>
        </div>

        <div class="card">
            <img src="img_cursos/4.png" alt="Propuesta 4"/>
            <a href="https://forms.gle/KS7zxVW4WQNVFw5g6" target="_blank" className="button">Inscribirme</a>
        </div>

    </section>
       <a href="/index.html" class="back-button">Volver Atrás</a>
      </div>
    );
  }
  
  export default Training;
  