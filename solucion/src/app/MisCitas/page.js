'use client';

import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../MisCitas/Estilos.css'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useRouter } from 'next/navigation'
import { useState } from 'react'    
import { Button } from 'react-bootstrap';
import PersonaApi from '@/api/persona.js'

const Ejercicio8 = () => {
    const router = useRouter()
    
    const handleclick=() =>{
        router.push('/Reservar_Citas')
    }

    return (
        <div className='Prueba'>
            <h2>
            Mis Citas
            </h2>
            <hr />
             <h3 className='Ncitas'>Actualmente no tiene citas de Asesoría reservadas</h3>
            <nav className='Button'> 
             <Button  onClick={handleclick}>Programar una cita</Button>
             </nav>
        </div>
        
    )
} 

export default Ejercicio8