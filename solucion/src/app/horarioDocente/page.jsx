'use client'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import ".//style.css"

var dia = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
var hora = ["11:00am - 12:00pm", "12:00pm - 01:00pm", "01:00pm - 02:00pm", "02:00pm - 03:00pm", "03:00pm - 04:00pm"]

function Horario(){
    return <div>

        <table className="tablaInfo">
            <tr>
                <td><h1 style={{fontSize:30, marginTop:30}}>mis horarios</h1></td>
            </tr>
        </table>
        <hr></hr>

        <h2 style={{fontSize:15}}>agregue sus horarios de disponibilidad durante la semana</h2>

        <div>
            <table>
                <tr>
                    <td style={{width: "20%"}}><div className="Contenedor"><br/><input type="text" class="texto" name="" id="" /><label class="label">dia de semana</label></div></td>
                    <td style={{width: "20%"}}><div className="Contenedor"><br/><input type="text" class="texto" name="" id="" /><label class="label">hora inicio</label></div></td>
                    <td style={{width: "20%"}}><div className="Contenedor"><br/><input type="text" class="texto" name="" id="" /><label class="label">hora fin</label></div></td>
                    <td style={{width: "20%"}}><div className="Contenedor"><br/><input type="text" class="texto" name="" id="" /><label class="label">enlace de sesion</label></div></td>
                </tr>
                <button class="guardar">Guardar</button>
                <tr>
                </tr>
            </table>

        </div>
    </div>
}

function Ejercicio2() {
    return <div>
        <div className="row">
            <div className="col-md-11">
                <Horario/>
            </div>
        </div>
    </div>
}

export default Ejercicio2