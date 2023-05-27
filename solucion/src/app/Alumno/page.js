'use client';

import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import './styles.css'
import Button from 'react-bootstrap/Button'

import Chip from '../../components/Chip/Chip.jsx'

const Alumno = () => {

    return (

        <div>
        
            <div class="middlebar">
                <h2>BIENVENIDO, CARLOS</h2>
            </div>

            <hr class ="linea"/>

            <div class="appointments">

               

                <h3>PROXIMAS CITAS</h3>
            
                     
                <br/>
            
                <Button >
                    
                <h3>Asesoria Redes de Computadora</h3>
                <p>Fecha: 15/05/2023</p>
                <p>Hora: 10:00 am</p>
                </Button>
                <br/><br/>
                <Button >
                <h3>Asesoria Programacion Web</h3>
                <p>Fecha: 16/05/2023</p>
                <p>Hora: 2:00 pm</p>
                </Button>
                </div>
        
        </div>


        )   
} 

export default Alumno