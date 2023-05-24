'use client';

import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import './styles.css'

import Chip from '../../components/Chip/Chip.jsx'

const Ejercicio3 = () => {

    const frutas = ["Manzana", "Pera", "Naranja", "Mandarina", "Pomelo"]
    const [arr, setArr] = useState(frutas)
    const [textBusqueda, setTextBusqueda] = useState("")

    return (
        <div>
            <h2>
            Ejercicio 4
            </h2>
            <p>
                Crear un componente compartido. El componente deberá renderizar un chip. 
                Usar el chip para renderizar el contenido de la lista.   
            </p>
            <Form.Control 
                type="text"
                value={textBusqueda}
                onChange={e => setTextBusqueda(e.target.value)}
                ></Form.Control>
            <ul className="nobullets">
                    { arr.filter(f => f.includes(textBusqueda))
                        .map(fruta =>{
                        return (<li key={fruta} >
                            <Chip text={fruta} />
                            </li>)
                    }) } 
            </ul>
        </div>
    )
} 

export default Ejercicio3