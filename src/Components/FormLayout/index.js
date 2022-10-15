import React, { useState } from "react";
import { jsPDF } from "jspdf";

export const FormLayout = () => {
  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const doc = new jsPDF("p", "pt");
    doc.setFont("Arial", "normal");
    doc.setFontSize(10);
    doc.text(formData, 20, 30);
    console.log("data", formData);

    doc.save(
      `${formData.title}-${formData.n1}-${formData.n2}-${formData.n3}-${formData.year}-${formData.expireDate}.pdf`
    );
  };

  return (
    <>
      <h1>Creación de Formulario</h1>

      <form
        className="form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="config_input" id="content">
          <input name="content" className="config_btn" type="file" />
        </div>

        <div className="top_form">
          <div>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              style={{ width: "350px" }}
              id="title"
              name="title"
              placeholder="Título Amigable"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label htmlFor="area">
              Área
              <span style={{ color: "red" }}>
                <sup>*</sup>
              </span>
            </label>
            <select
              id="area"
              style={{ width: "150px" }}
              name="area"
              onChange={(e) => handleChange(e)}
            >
              <option value="">---</option>
              <option value="systems">Sistemas</option>
              <option value="managements">Gerencias</option>
              <option value="accounting">Contabilidad</option>
            </select>
          </div>

          <div>
            <label htmlFor="campus">
              Sede
              <span style={{ color: "red" }}>
                <sup>*</sup>
              </span>
            </label>
            <select id="campus" name="campus" onChange={(e) => handleChange(e)}>
              <option value="">---</option>
              <option value="bello">Bello</option>
              <option value="medellin">Medellín</option>
              <option value="envigado">Envigado</option>
              <option value="sabaneta">Sabaneta</option>
            </select>
          </div>
        </div>

        <div className="middle_form">
          <div>
            <label htmlFor="n1">
              N1
              <span style={{ color: "red" }}>
                <sup>*</sup>
              </span>
            </label>
            <select
              id="n1"
              style={{ width: "220px" }}
              name="n1"
              onChange={(e) => handleChange(e)}
            >
              <option value="">---</option>
              <option value="nivel1">Nivel 1</option>
              <option value="nivel2">Nivel 2</option>
              <option value="nivel3">Nivel 3</option>
            </select>
          </div>

          <div>
            <label htmlFor="n2">N2</label>
            <select
              id="n2"
              style={{ width: "220px" }}
              name="n2"
              onChange={(e) => handleChange(e)}
            >
              <option value="">---</option>
              {formData.n1 === "nivel1" ? (
                <>
                  <option value="info">Informe</option>
                  <option value="report">Reporte</option>
                </>
              ) : null}
              {formData.n1 === "nivel2" ? (
                <>
                  <option value="datum">Dato</option>
                  <option value="premise">Premisa</option>
                </>
              ) : null}
              {formData.n1 === "nivel3" ? (
                <>
                  <option value="justification">Justificación</option>
                  <option value="poll">Encuesta</option>
                </>
              ) : null}
            </select>
          </div>

          <div>
            <label htmlFor="n3">N3</label>
            <select
              id="n3"
              style={{ width: "220px" }}
              name="n3"
              onChange={(e) => handleChange(e)}
            >
              <option value="">---</option>
              {formData.n2 === "info" ? (
                <>
                  <option value="declaration">Declaración</option>
                  <option value="justi">Justificación</option>
                </>
              ) : null}
              {formData.n2 === "report" ? (
                <>
                  <option value="reg">Registro</option>
                  <option value="scalability">Escalabilidad</option>
                </>
              ) : null}
              {formData.n2 === "datum" ? (
                <>
                  <option value="exp">Exponencial</option>
                  <option value="extra">Extra</option>
                </>
              ) : null}
              {formData.n2 === "premise" ? (
                <>
                  <option value="infographic">Infografía</option>
                  <option value="bio">Biografía</option>
                </>
              ) : null}
              {formData.n2 === "justification" ? (
                <>
                  <option value="bibliography">Bibliografía</option>
                  <option value="management">Gestión</option>
                </>
              ) : null}
              {formData.n2 === "poll" ? (
                <>
                  <option value="statistics">Estadística</option>
                  <option value="collection">Recopilación</option>
                </>
              ) : null}
            </select>
          </div>
        </div>

        <div className="bottom_form">
          <div>
            <label htmlFor="year">Año</label>
            <input
              type="date"
              min="1970-01-01"
              id="year"
              style={{ width: "150px" }}
              name="year"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <label htmlFor="expireDate">Fecha de vencimiento</label>
            <input
              type="date"
              id="expireDate"
              style={{ width: "200px" }}
              name="expireDate"
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <textarea
              name="observation"
              style={{ width: "320px", height: "220px" }}
              defaultValue="Observaciones: "
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
        </div>

        <div className="button">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
};
