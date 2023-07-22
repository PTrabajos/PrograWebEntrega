'use client';

import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import "./styles2.css"


import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "@/app/page.module.css";

import Inicio from "@/components/Inicio/inicio.jsx" //cambio


const User = () => {
    Inicio("/PantallaPrincipal");
    const [nameUser, setNameUser] = useState("");

    useEffect(() => {
      const nameUser = window.localStorage.getItem("nameUser");
      setNameUser(nameUser);
    }, [])

//Atención alumno

const [atenciones, setAtenciones] = useState([]);
const [pageActual, setPageActual] = useState(1);
const atencionesPage = 4;
const totalPages = Math.ceil(atenciones.length/ atencionesPage);

useEffect(() => {
    obteneratencionesReservadas();
}, []);

const obteneratencionesReservadas = () => {
    const storedAtenciones = localStorage.getItem("Atenciones");
    if (storedAtenciones){
        const atencionesReservadas = JSON.parse(storedAtenciones);
        setAtenciones(atencionesReservadas);
    }
};

const cambiarPage = (page) => {
    setPageActual(page);
}
  
const atencionesxPage = atenciones.slice(
    (pageActual - 1) * atencionesxPage,
    pageActual * atencionesxPage
);
    return (
        <div>
         {window.localStorage.getItem("rol")==="profesor"?
             <h2>Bienvenido, Profesor(a) {nameUser}!</h2>
             :
             <h2>Bienvenido, {nameUser}!</h2>
            }
        
            <hr class="linea"/>

            <div class="appointments">
              
                
                    <h3> PROXIMAS CITAS</h3>
                    
                    <div className={styles.container}>
                        {citasPagina.length > 0 ? (
                          <div className = {styles.citasGrid}>
                            {atencionesPagina.map((atencion, index) => (
                              <div key = {index} className = {styles.atencionContainer}>
                                <div className = {styles.numeroAtencion}>
                                  {(pageActual -1 ) * atencionesPage + index + 1}    
                                </div> 
                                <div className = {styles.infoCita}>
                                  El {atencion.dia} de {atencion.horaInicio} a {atencion.horario}
                                </div>
                                </div>
                            ))}
                        </div>
                        ) : (
                            <p>No hay citas reservadas</p>
                        )}
                        {totalPages > 1 && (
                            <div className = {styles.pagination}>
                                {Array.from({length: totalPages}, (_, index) => (
                                <button
                                    key = {index}
                                    onClick={() => cambiarPage(index + 1)}
                                    className={`${
                                        pageActual === index + 1 ? styles.active:""
                                        } ${styles.paginationButton}`}
                                >
                                    {index + 1}
                                </button>
                                ))}
                             </div>
                            )}
                        </div>
                        </div>
                        <br/>          
        </div>   
    )
} 

export default User

