'use client';

import ToastComp from "@/components/Toast/Toast";
import Button from "react-bootstrap/Button";

import { useState } from 'react'

const Ejercicio6 = () => {

    const [ showToast, setShowToast ] = useState(false)

    return (
        <div>
            <h2>
            Ejercicio 6
            </h2>
            <p>
                Agregar un TopBar.
                Agregar un Menu.
                Agregar una sección pricipal con un artículo.
                Agregar un botón que al hacer click muestre un modal. 
            </p>
            <Button onClick={() => setShowToast(!showToast)}>SHOW ME</Button>

            <ToastComp show={showToast}/>
        </div>
    )
} 

export default Ejercicio6