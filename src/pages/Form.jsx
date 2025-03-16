import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebaseConfig"; // Importar la configuración de Firebase
import { collection, addDoc } from "firebase/firestore"; // Importar Firestore
import "./Form.css"; 

function Form() {
  const { id } = useParams(); 

  // Estados para manejar el formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Datos de los cursos con enlaces de pago
  const cursos = {
    1: { nombre: "Community Manager", descripcion: "Comienza el 7 de abril", pago: "https://www.mercadopago.com/curso-community" },
    2: { nombre: "Redes sociales para emprendedores", descripcion: "Comienza el 10 de mayo", pago: "https://www.mercadopago.com/curso-redes" },
    3: { nombre: "Planificar tu contenido", descripcion: "Encuentros 8 y 15 de abril", pago: "https://www.mercadopago.com/curso-contenido" },
    4: { nombre: "Canva y Capcut", descripcion: "Próximamente", pago: "https://www.mercadopago.com/curso-canva" },
  };

  // Validar si el ID existe en los cursos
  const curso = cursos[id] || { nombre: "Curso desconocido", descripcion: "No se encontró este curso.", pago: "#" };

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Guardar datos en Firestore
      await addDoc(collection(db, "inscripciones"), {
        nombre: formData.name,
        email: formData.email,
        mensaje: formData.message,
        curso: curso.nombre, // Guardamos el curso al que se inscribió
        fecha: new Date(),
      });

      alert("Inscripción enviada con éxito.");
      setFormData({ name: "", email: "", message: "" }); // Resetear formulario
    } catch (error) {
      console.error("Error al guardar en Firestore:", error);
      alert("Error al enviar la inscripción.");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Formulario de inscripción</h1>
      <h2 className="form-subtitle">{curso.nombre}</h2>
      <p className="form-description">{curso.descripcion}</p>

      <div className="form-content">
        {/* Formulario de inscripción */}
        <form className="form-box" onSubmit={handleSubmit}>
          <label className="form-label">
            Nombre:
            <input type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} required />
          </label>
          <br />
          <label className="form-label">
            Correo Electrónico:
            <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required />
          </label>
          <br />
          <label className="form-label">
            Mensaje:
            <textarea name="message" className="form-textarea" value={formData.message} onChange={handleChange} placeholder="¿Por qué quieres inscribirte?" required />
          </label>
          <br />
          <button type="submit" className="form-button">Enviar</button>
        </form>

        {/* Botón de pago de Mercado Pago */}
        <div className="payment-container">
          <img src="../../public/assets/mp_logo.png" alt="mercado pago" />
          <a href={curso.pago} target="_blank" rel="noopener noreferrer" className="payment-button">Pagar con Mercado Pago</a>
        </div>
      </div>
    </div>
  );
}

export default Form;
