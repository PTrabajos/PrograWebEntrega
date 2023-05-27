'use client'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import ".//style.css"

var curso = ["Programacion ", "Calculo ", "Ciencias "]
var docente = "Romaina Acevedo, Juan Carlos"
var grado = "5°"
var correo = "romaina@gmail.com"
var presentacion = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker."
var dia = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
var hora = ["11:00am - 12:00pm", "12:00pm - 01:00pm", "01:00pm - 02:00pm", "02:00pm - 03:00pm", "03:00pm - 04:00pm"]

function Info(){
    return <div>

        <table className="tablaInfo">
            <tr>
                <td><h1 style={{fontSize:30, marginTop:30}}>Reservar Cita</h1></td>
            </tr>
        </table>
        <hr></hr>

        <h2 style={{fontSize:15}}>Docente</h2>

        <div className="img"><img src="https://media.tenor.com/vjDSipHhsjAAAAAd/fortnite-snake-eyes.gif" style={{ width: "45%" }} alt=""/></div>
            
        <div>
            <table>
                <tr>
                    <td ><div className="Contenedor"><label class="label">Nombre: {docente}</label></div></td>
                    <td ><div className="Contenedor"><label class="label">Grado: {grado}</label></div></td>
                </tr>

                
                <tr>
                    <td><div className="Contenedor"><label class="label">Correo: {correo}</label></div></td>
                    <td ><div className="Contenedor"><label class="label">Cursos: {curso}</label></div></td>
                </tr>
            </table>
            
            <div className="Contenedor2"><label class="label">{presentacion}</label></div>

            <hr ></hr>
        </div>
    </div>
}


function Reservar(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div className="reservaCuadro">

        <table>
            <tr>
                <td>
                    <DropdownButton variant="" id="dropdown-basic-button" title="Dia" className='desplegable'>
                        <Dropdown.Item href="#/action-1">{dia}</Dropdown.Item>
                    </DropdownButton>
                </td>
                <td>
                    <DropdownButton variant="" id="dropdown-basic-button" title="Hora" className='desplegable'>
                        <Dropdown.Item href="#/action-1">{hora}</Dropdown.Item>
                    </DropdownButton>
                </td>
                <td>
                    <DropdownButton variant="" id="dropdown-basic-button" title="Curso" className='desplegable'>
                        <Dropdown.Item href="#/action-1">{curso}</Dropdown.Item>
                    </DropdownButton>
                </td>

                <td>
                    <Button variant="" onClick={handleShow} className='boton'>
                        Registar
                    </Button>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>¡REGISTRO EXITOSO!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Se ha registrado su reserva correctamente.
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="" onClick={handleClose}>
                                Cerrar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </td>
            </tr>
        </table>
        </div>
}


function Ejercicio1() {
    return <div>
        <div className="row">
            <div className="col-md-11"><Info/><Reservar/>
            </div>
        </div>
    </div>
}

export default Ejercicio1