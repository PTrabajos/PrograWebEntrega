"use client"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Form from 'react-bootstrap/Form';
import Chip from '../../components/Chip/Chip.jsx';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function reservarcita() {
  const busquedas = ["Elemento1", "Elemento2"];
  const [arr, setArr] = useState(busquedas);
  const [textBusqueda, setTextBusqueda] = useState("");
  const [tipoBusqueda, setTipoBusqueda] = useState("Por nombre");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTipoAsesoria, setSelectedTipoAsesoria] = useState("materia");

  const handleTabSelect = (key) => {
    setTipoBusqueda(key);
    setTextBusqueda("");
    setSelectedDate(null);
  };

  const handleTipoAsesoriaChange = (e) => {
    setSelectedTipoAsesoria(e.target.value);
  };

  const getPlaceholderText = () => {
    switch (tipoBusqueda) {
      case "Por fecha":
        return "Ingrese fecha a buscar";
      case "Por tipo de asesoria":
        return "Seleccione tipo de asesoria";
      default:
        return "Ingrese nombre a buscar";
    }
  };

  const filterResults = () => {
    return arr.filter(f => f.includes(textBusqueda));
  };

  return (
    <div style={{ display: 'flex' }}>
      <h2>Reserva de cita</h2>
      <Tabs
        defaultActiveKey="Por nombre"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
        onSelect={handleTabSelect}
      >
        <Tab eventKey="Por nombre" title="Por nombre">
          Búsqueda por nombre
        </Tab>
        <Tab eventKey="Por fecha" title="Por fecha">
          Búsqueda por fecha
        </Tab>
        <Tab eventKey="Por tipo de asesoria" title="Por tipo de asesoria">
          <Form.Group>
            <Form.Label>Seleccione tipo de asesoria:</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Materia"
                name="tipoAsesoria"
                value="materia"
                checked={selectedTipoAsesoria === "materia"}
                onChange={handleTipoAsesoriaChange}
              />
              <Form.Check
                type="radio"
                label="Tesis"
                name="tipoAsesoria"
                value="tesis"
                checked={selectedTipoAsesoria === "tesis"}
                onChange={handleTipoAsesoriaChange}
              />
            </div>
          </Form.Group>
        </Tab>
      </Tabs>
      <Form.Control
        className='Barra_Busqueda'
        type="text"
        value={textBusqueda}
        onChange={e => setTextBusqueda(e.target.value)}
        placeholder={getPlaceholderText()}
      />
      {tipoBusqueda === "Por fecha" && (
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Seleccione una fecha"
        />
      )}
      <p>{tipoBusqueda === "Por tipo de asesoria" ? "Seleccione tipo de asesoria" : "Ingrese nombre a buscar"}</p>
      <ul className="nobullets">
        {filterResults().map(busqueda => {
          return (<li key={busqueda} style={{ display: 'inline-block', borderColor: 'red' }}>
            <Chip text={busqueda} /></li>);
        })}
      </ul>
      <hr />
    </div>
  );
}

export default reservarcita;

/*
"use client"
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Form from 'react-bootstrap/Form';
import Chip from '../../components/Chip/Chip.jsx';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import personaApi from './api/personas'; // Asegúrate de importar correctamente la API de personas

function ReservarCita() {
  const [arr, setArr] = useState([]);
  const [textBusqueda, setTextBusqueda] = useState("");
  const [tipoBusqueda, setTipoBusqueda] = useState("Por nombre");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTipoAsesoria, setSelectedTipoAsesoria] = useState("materia");

  const handleTabSelect = (key) => {
    setTipoBusqueda(key);
    setTextBusqueda("");
    setSelectedDate(null);
  };

  const handleTipoAsesoriaChange = (e) => {
    setSelectedTipoAsesoria(e.target.value);
  };

  const getPlaceholderText = () => {
    switch (tipoBusqueda) {
      case "Por fecha":
        return "Ingrese fecha a buscar";
      case "Por tipo de asesoria":
        return "Seleccione tipo de asesoria";
      default:
        return "Ingrese nombre a buscar";
    }
  };

  const filterResults = () => {
    return arr.filter(f => f.includes(textBusqueda));
  };

  const fetchPersonas = async () => {
    try {
      const response = await personaApi.findAll();
      setArr(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPersonas();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <h2>Reserva de cita</h2>
      <Tabs
        defaultActiveKey="Por nombre"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
        onSelect={handleTabSelect}
      >
        <Tab eventKey="Por nombre" title="Por nombre">
          Búsqueda por nombre
        </Tab>
        <Tab eventKey="Por fecha" title="Por fecha">
          Búsqueda por fecha
        </Tab>
        <Tab eventKey="Por tipo de asesoria" title="Por tipo de asesoria">
          <Form.Group>
            <Form.Label>Seleccione tipo de asesoria:</Form.Label>
            <div>
              <Form.Check
                type="radio"
                label="Materia"
                name="tipoAsesoria"
                value="materia"
                checked={selectedTipoAsesoria === "materia"}
                onChange={handleTipoAsesoriaChange}
              />
              <Form.Check
                type="radio"
                label="Tesis"
                name="tipoAsesoria"
                value="tesis"
                checked={selectedTipoAsesoria === "tesis"}
                onChange={handleTipoAsesoriaChange}
              />
            </div>
          </Form.Group>
        </Tab>
      </Tabs>
      <Form.Control
        className='Barra_Busqueda'
        type="text"
        value={textBusqueda}
        onChange={e => setTextBusqueda(e.target.value)}
        placeholder={getPlaceholderText()}
      />
      {tipoBusqueda === "Por fecha" && (
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Seleccione una fecha"
        />
      )}
      <p>{tipoBusqueda === "Por tipo de asesoria" ? "Seleccione tipo de asesoria" : "Ingrese nombre a buscar"}</p>
      <ul className="nobullets">
        {filterResults().map(busqueda => {
          return (<li key={busqueda} style={{ display: 'inline-block', borderColor: 'red' }}>
            <Chip text={busqueda} /></li>);
        })}
      </ul>
      <hr />
    </div>
  );
}

export default ReservarCita;
/*


