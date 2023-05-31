"use client"

import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import 'bootstrap/dist/js/bootstrap.bundle.js' ;

import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import dynamic from "next/dynamic";
import React, {Component} from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import Link from '../components/Link/Link.jsx';



const inter = Inter({ subsets: ['latin'] })

function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
 
      </head>
      <body>
        <div class="Contenido">
        <header class="Cabecera">
            <div class="menu-toggle">
                <div class="hamburger"></div>
            </div>
            
            <h2>Atención de Citas</h2>
            <div class="Perfil">
                <BsFillPersonFill/>
            </div>
        </header>
        <div class="Contenido-Menu">
            <nav class="menu">
                <nav class="item">
                <Link href="/Alumno" text="Princial"/>
                </nav>
                <nav class="item">
                <Link href="/Perfil" text="Perfil Alumno"/>
                </nav>
                <nav class="item">
                <Link href="/PerfilDocente" text="Perfil Docente"/>
                </nav>
                <nav class="item">
                <Link href="/MisCitas" text="Citas"/>
                </nav>
                <nav class="item">
                <Link href="/reservarcita" text="Reservar citas"/>
                </nav>
                
                <h6 class="version">SAC v1.0.1+alpha</h6>
                
            </nav>
        </div>
        <section className='principal'>
          {children}
        </section>
    </div>
</body>
    </html>
  )
}

export default dynamic(() => Promise.resolve(RootLayout), {
  ssr: false,
});
