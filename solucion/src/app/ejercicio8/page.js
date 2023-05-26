'use client';

import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { useState } from 'react'    
import { Button } from 'react-bootstrap';
import PersonaApi from '@/api/persona.js'

const Ejercicio8 = () => {

    const [showDatosPersona, setShowDatosPersona ] = useState(true)

    const defaultPersona = {
        nombres: "",
        apellidos: "",
        dni: "",
        ciudad: "",
        direccion: ""
    }

    const [persona, setPersona] = useState(defaultPersona)

    const handleOnDropdownChange = (eventKey) => {
        if (eventKey === "persona")
            setShowDatosPersona(true)
        else
            setShowDatosPersona(false)
    } 

    const handleOnClick = () => {
        
        PersonaApi.save(persona)
        const personas = PersonaApi.getAll()
        console.log(personas)
    }

    return (
        <div className='prueba'>
            <h2>
            Ejercicio 8
            </h2>
            <p>
                En base al ejercicio 7. guardar los datos de la pesona en memoria.    
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
                    <Form.Control type="text" id="Nombres"
                        value={persona.nombres}
                        onChange={e => setPersona({...persona, nombres: e.target.value})}/>
                    <Form.Label htmlFor="Apellidos">Apellidos</Form.Label>
                    <Form.Control type="text" id="Apellidos"
                        value={persona.apellidos}
                        onChange={e => setPersona({...persona, apellidos: e.target.value})}/>
                    <Form.Label htmlFor="dni">DNI</Form.Label>
                    <Form.Control type="text" id="dni"
                        value={persona.dni}
                        onChange={e => setPersona({...persona, dni: e.target.value})}/>
                </div>
                :
                <div>
                <h3>Direcciones</h3>
                    <Form.Label htmlFor="Ciudad">Ciudad</Form.Label>
                    <Form.Control type="text" id="Ciudad"
                        value={persona.ciudad}
                        onChange={e => setPersona({...persona, ciudad: e.target.value})}/>
                    <Form.Label htmlFor="Direccion">Dirección</Form.Label>
                    <Form.Control type="text" id="Direccion"
                        value={persona.direccion}
                        onChange={e => setPersona({...persona, direccion: e.target.value})}
                    />
                </div>
            }
            <div>
                <Button onClick={() => handleOnClick()}>GUARDAR</Button>
            </div>
        </div>
    )
} 

export default Ejercicio8