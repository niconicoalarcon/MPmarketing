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
    apellido:"",
    nacimiento:"",
    dni:"",
    telefono: "",
    direccion:"",
    localidad:"",
    contac_emergency:"",
    message: "",
  });

  // Datos de los cursos con enlaces de pago
  const cursos = {
    1: { nombre: "Community Manager", descripcion: "Comienza el 7 de abril", pago: "https://mpago.li/1CZvf5e" },
    2: { nombre: "Redes sociales para emprendedores", descripcion: "Comienza el 10 de mayo", pago: "https://mpago.la/2VeQXz9" },
    3: { nombre: "Planificar tu contenido", descripcion: "Encuentros 8 y 15 de abril", pago: "https://mpago.li/2GzHY2k" },
    4: { nombre: "Canva y Capcut", descripcion: "Próximamente", pago: "" },
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
        apelido: formData.apellido,
        nacimiento: formData.nacimiento,
        dni: formData.dni,
        telefono: formData.telefono,
        direccion: formData.direccion,
        localidad: formData.localidad,
        contact_emergency: formData.contact_emergency,
        mensaje: formData.message,
        curso: curso.nombre, // Guardamos el curso al que se inscribió
        fecha: new Date(),
      });

      alert("Inscripción enviada con éxito.");
      setFormData({ name: "", apellido: "",nacimiento:"",dni:"",telefono:"",direccion:"",localidad:"",contact_emergency:"", message: "" }); // Resetear formulario
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
            Apellido:
            <input type="text" name="apellido" className="form-input" value={formData.apellido} onChange={handleChange} required />
          </label>
          <br />
          <label className="form-label">
            Fecha de Nacimiento:
            <input type="date" name="nacimiento" className="form-input" value={formData.nacimiento} onChange={handleChange} required />
          </label>
          <br />
          <label className="form-label">
            DNI:
            <input type="text" name="dni" className="form-input" value={formData.dni} onChange={handleChange} required />
          </label>
          <br />
          <label className="form-label">
            Teléfono:
            <input type="text" name="telefono" className="form-input" value={formData.telefono} onChange={handleChange} required />
          </label>
          <br />
          <label className="form-label">
            Dirección:
            <input type="text" name="direccion" className="form-input" value={formData.direccion} onChange={handleChange} required />
          </label>
          <br />
          <label className="form-label">
            Localidad:
            <input type="text" name="localidad" className="form-input" value={formData.localidad} onChange={handleChange} required />
          </label>
          <br />
          <label className="form-label">
            Contacto de emergencia:
            <input type="text" name="contact_emergency" className="form-input" value={formData.contact_emergency} onChange={handleChange} required />
          </label>
          <br />
          <label className="form-label">
            Mensaje:
            <textarea name="message" className="form-textarea" value={formData.message} onChange={handleChange} placeholder="Dejanos tus dudas o consultas" required />
          </label>
          <br />
          <button type="submit" className="form-button">Enviar</button>
        </form>

        {/* Botón de pago de Mercado Pago */}
        <div className="payment-container">
          <img src="/assets/mp_logo.png" alt="mercado pago" />
          <a href={curso.pago} target="_blank" rel="noopener noreferrer" className="payment-button">Pagar por Mercado Pago</a>
        </div>
      </div>
    </div>
  );
}

export default Form;
