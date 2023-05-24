'use client';

import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { useState } from 'react'

const Ejercicio7 = () => {

    const [showDatosPersona, setShowDatosPersona ] = useState(true)

    const handleOnDropdownChange = (eventKey) => {
        if (eventKey === "persona")
            setShowDatosPersona(true)
        else
            setShowDatosPersona(false)
    } 

    return (
        <div>
            <h2>
            Ejercicio 7
            </h2>
            <p>
                Construir una seccion con datos de una persona.
                Construir otra sección con direcciones de una persona.
                agregar un combobox (dropdown). renderizar una sección u otra en base a 
                la opción elegida.
            </p>
            <div>
                <DropdownButton 
                    id="dropdown-basic-button" 
                    title="Datos"
                    onSelect={e => handleOnDropdownChange(e)}>
                    <Dropdown.Item eventKey="persona">Datos de Persona</Dropdown.Item>
                    <Dropdown.Item eventKey="direccion">Dirección</Dropdown.Item>
                </DropdownButton>
            </div>
            {
                showDatosPersona ?
                <div>
                    <h3>Datos de Persona</h3>
                    <Form.Label htmlFor="Nombres">Nombres</Form.Label>
                    <Form.Control type="text" id="Nombres"/>
                    <Form.Label htmlFor="Apellidos">Apellidos</Form.Label>
                    <Form.Control type="text" id="Apellidos"/>
                    <Form.Label htmlFor="dni">DNI</Form.Label>
                    <Form.Control type="text" id="dni"/>
                </div>
                :
                <div>
                <h3>Direcciones</h3>
                    <Form.Label htmlFor="Ciudad">Ciudad</Form.Label>
                    <Form.Control type="text" id="Ciudad"/>
                    <Form.Label htmlFor="Direccion">Dirección</Form.Label>
                    <Form.Control type="text" id="Direccion"/>
                </div>
            }
            
        </div>
    )
} 

export default Ejercicio7