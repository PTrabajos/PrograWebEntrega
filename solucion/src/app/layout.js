"use client"

import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import 'bootstrap/dist/js/bootstrap.bundle.js' ;

import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import dynamic from "next/dynamic";
import React, {Component} from 'react';
import { BsFillPersonFill } from "react-icons/bs";

const iconos =require.context('../../Imagenes/Iconos',true)


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
                <a href="#" class="item">Principal</a>
                <a href="#" class="item">Perfil</a>
                <a href="#" class="item">Citas</a>
                <h6 class="version">SAC v1.0.1+alpha</h6>
            </nav>
        </div>
    </div>
</body>
    </html>
  )
}

export default dynamic(() => Promise.resolve(RootLayout), {
  ssr: false,
});