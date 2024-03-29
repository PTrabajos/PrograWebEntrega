"use client";
import React, { useState } from "react";
import { useEffect } from "react";
//import TopBar from "@/components/TopBar/TopBar";
//import Menu from "@/components/MenuAlumno/Menu";
import styles from "../Perfil-Alumno/page.module.css";
//import { Button, Container, FormControl, FormLabel } from "react-bootstrap";
import Avatar from "../../components/Avatar/Avatar"
//import Button from '../../components/Button/Button.jsx';
import Inicio from "@/components/Inicio/inicio.jsx" //cambio

const Perfil = () => {
  Inicio("/Perfil")

  const [schedule, setSchedule] = useState([]);
  const [newSchedule, setNewSchedule] = useState({
    diaSemana: "",
    horaInicio: "",
    horaFin: "",
    sesionLink: "",
  });

  const [Nombres, setNombres] = useState("");
  const [Apellidos, setApellidos] = useState("");
  const [TipoDocu, setTipoDocu] = useState("");
  const [Rol, setRol] = useState("");
  const [Numero, setNumero] = useState("");

  const [Usuario, setUsuario] = useState("");
  const [ContraActual, setContraAc] = useState("");
  const [NuevaContra, setNuevaContra] = useState("");
  const [RepContra, setRepContra] = useState("");

  useEffect(() => {
    const storedSchedule = localStorage.getItem("schedule");
    if (storedSchedule) {
      setSchedule(JSON.parse(storedSchedule));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }, [schedule]);

  const handleInputChange = (e) => {
    setNewSchedule({
      ...newSchedule,
      [e.target.name]: e.target.value,
    });
  };

  const addSchedule = (e) => {
    e.preventDefault();

    if (
      newSchedule.diaSemana.trim() === "" ||
      newSchedule.horaInicio === "" ||
      newSchedule.horaFin === "" ||
      newSchedule.sesionLink.trim() === ""
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }

    setSchedule([...schedule, newSchedule]);
    setNewSchedule({
      diaSemana: "",
      horaInicio: "",
      horaFin: "",
      sesionLink: "",
    });
    setError("");
  };

  const deleteSchedule = (index) => {
    const updatedSchedule = [...schedule];
    updatedSchedule.splice(index, 1);
    setSchedule(updatedSchedule);
  };

  const [mostrar, setMostrar] = useState(0);

  return (
    <div>
      <div className={styles.Guardar}>
        <h2>Mi Perfil</h2>
        <div className={styles.botones}>
          <Button style={{
    backgroundColor: "#684FA5",  // Color morado
    color: "white",             // Color blanco para el texto
  }}>Cancelar</Button>
          <Button style={{
    backgroundColor: "#684FA5",  // Color morado
    color: "white",             // Color blanco para el texto
  }}>Guardar</Button>
        </div>
      </div>
      <hr />
      <div className={styles.Fondo}>
        <h4>Información Personal</h4>
        <div className={styles.container}>
          <div className={styles.contInfo}>
            <div className={styles.forms1}>
              <div className={styles.inputGroup}>
                <input
                  className={styles.input}
                  required
                  id="Nombre"
                  type="text"
                  name="Nombres"
                  value={Nombres}
                  onChange={(e) => setNombres(e.target.value)}
                ></input>
                <label for="dia" className={styles.inputLabel}>Nombres</label>
              </div>
              <div className={styles.inputGroup}>
                <input
                  className={styles.input}
                  required
                  id="Apellidos"
                  type="text"
                  name="apellidos"
                  value={Apellidos}
                  onChange={(e) => setApellidos(e.target.value)}
                ></input>
                <label for="inicio" className={styles.inputLabel}>Apellidos</label>
              </div>
              <div className={styles.inputGroup}>
                <input
                  className={styles.input}
                  required
                  id="Documento"
                  type="text"
                  name="documento"
                  value={TipoDocu}
                  onChange={(e) => setTipoDocu(e.target.value)}
                ></input>
                <label for="fin" className={styles.inputLabel}>Tipos de Documento</label>
              </div>
            </div>
            <div className={styles.forms2}>
              <div className={styles.inputGroup}>
                <input
                  className={styles.input}
                  required
                  id="Rol"
                  type="text"
                  name="rol"
                  value={Rol}
                  onChange={(e) => setRol(e.target.value)}
                ></input>
                <label for="fin" className={styles.inputLabel}>Rol</label>
              </div>
              <div className={styles.inputGroup}>
                <input
                  className={styles.input}
                  required
                  id="Numero"
                  type="text"
                  name="numero"
                  value={Numero}
                  onChange={(e) => setNumero(e.target.value)}
                ></input>
                <label for="fin" className={styles.inputLabel}>Número</label>
              </div>
            </div>
          </div>
          <div className={styles.foto}>
            <Avatar></Avatar>
          </div>
        </div>
        <hr></hr>
        {/* Div RENDER */}
        <div className={styles.renderbox}>
          <div className={styles.menuboton}>
            <button className={styles.button} onClick={() => setMostrar(0)}>Datos de Usuario</button>
            <button className={styles.button} onClick={() => setMostrar(1)}>Universidad</button>
            <button className={styles.button} onClick={() => setMostrar(2)}>Presentación</button>
          </div>
          <div className={styles.renderzone}>
            {mostrar == 0?
              <div>
                <div className={styles.DatosUsuario}>
                  <div className={styles.inputGroup}>
                    <input
                      className={styles.input}
                      required
                      id="dia"
                      type="text"
                      name="diaSemana"
                      value={Usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                    ></input>
                    <label for="dia" className={styles.inputLabel}>Usuario</label>
                  </div>
                </div>
                <div className={styles.DatosUsuario2}>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      name="sesionLink"
                      className={styles.input}
                      required
                      id="enlace"
                      value={ContraActual}
                      onChange={(e) => setContraAc(e.target.value)}
                    ></input>
                    <label for="enlace" className={styles.inputLabel}>Contraseña Actual</label>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      className={styles.input}
                      required
                      id="inicio"
                      type="text"
                      name="horaInicio"
                      value={NuevaContra}
                      onChange={(e) => setNuevaContra(e.target.value)}
                    ></input>
                    <label for="inicio" className={styles.inputLabel}>Nueva Contraseña</label>
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      className={styles.input}
                      required
                      id="fin"
                      type="text"
                      name="horaFin"
                      value={RepContra}
                      onChange={(e) => setRepContra(e.target.value)}
                    ></input>
                    <label for="fin" className={styles.inputLabel}>Repetir Contraseña</label>
                  </div>
                </div>
              </div>
            :
              mostrar == 1?
                <div className={styles.universidadContainer}>
                  <div className={styles.uniInfo}>
                    <p>Universidad</p>
                    <input type="text" className={styles.inputUni}></input>
                    <p>Carrera</p>
                    <input type="text" className={styles.inputUni}></input>
                  </div>
                  <div className={styles.line}> </div>
                  <div className={styles.uniInfo}>
                    <p> Agregar Cursos</p>
                    <input type="text" className={styles.inputCursos}></input>
                  </div>
                </div>
              :
                <div className={styles.presentacion}>
                  <p className={styles.labelPresentación}>Título</p>
                  <input
                    className={styles.inputPresentación}
                    type="text"
                  ></input>
                  <p className={styles.labelPresentación}>Descripción</p>
                  <input
                    className={styles.inputPresentación}
                    type="text"
                  ></input>
                </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
