'use client';

import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import './EstilosR.css'

import Form from 'react-bootstrap/Form';


import { useState } from 'react'    
import { Button } from 'react-bootstrap';
import PersonaApi from '@/api/persona.js'
import {FaStar} from "react-icons/fa"


const colors ={
    orange:"#FFBA5A",
    grey:"#a9a9a9"
}
const Reserva_Citas_General = () => {

    const usuario='Alumno'
    const handleclick=() =>{
    
    }
    const stars =Array(5).fill(0);
    return (
        <div className='Prueba'>
            <nav className='BarraCitas'>
                <h2 className='Titulo'>Mis Citas
                </h2>
                <nav className='Button'> 
                    <Button  onClick={handleclick}>Programar una cita</Button>
                </nav>
            </nav>
            <hr />
            <nav className='BarrasubCitas'>
                <h8 className='Subtitulo'>Citas de asesoría reservadas: </h8>
                <nav className='Button'> 
                    <Button  onClick={handleclick}>Programar una cita</Button>
                </nav>

            </nav>
            <div className='col-12'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre y Apellido</th>
                        <th>Calificación</th>
                        <th>Acción</th> 
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Profesor 1</td>
                        <td>
                            <div style={styles.stars}>
                                {stars.map((_,index)=>{
                                    return(
                                        <FaStar key={index} />
                                    )
                                }
                                
                                )}
                            </div>
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                </tbody>    
                
            </div>            
        
        </div>
        
    )
}

const styles = {
    container:{
        display:"flex",
        flexDirection: "column",
        alignItem:"center",
    }
}

export default Reserva_Citas_General