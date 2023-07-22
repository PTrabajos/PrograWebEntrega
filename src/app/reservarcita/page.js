
'use client';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Form from 'react-bootstrap/Form';
import Chip from '../../components/Chip/Chip.jsx';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function reservarcita() {
  const busquedas = ["Felipe Lopez Jimenez", "Juanito alcachofa"];
  const [arr, setArr] = useState(busquedas);
  const [textBusqueda, setTextBusqueda] = useState("");
  const [tipoBusqueda, setTipoBusqueda] = useState("Por nombre");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleTabSelect = (key) => {
    setTipoBusqueda(key);
    setTextBusqueda("");
    setSelectedDate(null);
  };

  const getPlaceholderText = () => {
    switch (tipoBusqueda) {
      case "Por fecha":
        return "Ingrese fecha a buscar";
      case "Por tipo de asesoria":
        return "Ingrese tipo de asesoria a buscar";
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
          Búsqueda por Tipo de asesoria
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
      <p>{tipoBusqueda === "Por tipo de asesoria" ? "Ingrese tipo de asesoria a buscar" : "Ingrese nombre a buscar"}</p>
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
