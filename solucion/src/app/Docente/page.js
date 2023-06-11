'use client';

import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import "./styles2.css"

const Docente = () => {

  

    return (
        <div >
         
        
        <div class="middlebar">
            <h2>BIENVENIDO, PROFESOR JUAN</h2>
            
        </div>
        <hr class="linea"/>

        <div class="appointments">
                <table className="tablaCitas"><br/>
                
                    <h3> PROXIMAS CITAS</h3>
                    
                                
                        <br/>
                    
                        <button class="asesoria1" >
                            
                        <h4>Asesoria Redes de Computadora</h4>
                        <p>Fecha: 15/05/2023</p>
                        <p>Hora: 10:00 am</p>
                        </button>
                        <br/><br/>
                        <button class="asesoria2" >
                        <h4>Asesoria Programacion Web</h4>
                        <p>Fecha: 16/05/2023</p>
                        <p>Hora: 2:00 pm</p>
                        </button> 

                        <p class="indice">
                            Página 1 de 1
                        </p>
            </table>
        </div>
        <div class="appointments">
            <table className="tablaCitas">

            </table>
        </div>
    
    </div>
    )
} 

export default Docente
