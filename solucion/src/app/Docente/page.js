'use client';

import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'

const Docente = () => {

  

    return (
        <div>
            <div class="middlebar">
                <h2>BIENVENIDO, PROFESOR JUAN</h2>
            </div>

          

            <div class="appointments">

                <h3>PROXIMAS CITAS</h3>
                <Form.Control class="control"
                    type="text"
                    placeholder="Buscar curso..."
                    value={textBusqueda}
                    onChange={e => setTextBusqueda(e.target.value)}></Form.Control>
                     
                <br/>

                <Button class="button1">
                    
                <h3>Asesoria Redes de Computadora</h3>
                <p>Fecha: 15/05/2023</p>
                <p>Hora: 10:00 am</p>
                </Button>
                <br/><br/>
                <Button class="button2">
                <h3>Asesoria Programacion Web</h3>
                <p>Fecha: 16/05/2023</p>
                <p>Hora: 2:00 pm</p>
                </Button>
            </div>
            
        </div>
    )
} 

export default Docente