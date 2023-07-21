'use client'

import { useState } from "react"
import ".//page.css"

function Info() {
  return (
    <div>
      <table className="tablaInfo">
        <tr>
          <td>
            <h1 style={{ fontSize: 30, marginTop: 30 }}>Reservar Cita</h1>
          </td>
        </tr>
      </table>
      <hr />
      <h2 style={{ fontSize: 15 }}>Calificaciones</h2>
      <table>
        <tr>
          <td style={{ width: "20%" }}>
            <div className="Contenedor">
              <br />
              <input type="text" className="texto" name="" id="" />
              <label className="label">Calificación 1</label>
            </div>
          </td>
          <td style={{ width: "20%" }}>
            <div className="Contenedor">
              <br />
              <input type="text" className="texto" name="" id="" />
              <label className="label">Calificación 2</label>
            </div>
          </td>
          <td style={{ width: "20%" }}>
            <div className="Contenedor">
              <br />
              <input type="text" className="texto" name="" id="" />
              <label className="label">Calificación 3</label>
            </div>
          </td>
        </tr>
        <hr />
        <h2 style={{ fontSize: 15 }}>Papeleo para citas</h2>
        <tr>
          <td>
            <div className="Contenedor">
              <br />
              <input type="text" className="texto" name="" id="" />
              <label className="label">Nombre del alumno</label>
            </div>
          </td>
          <td>
            <div className="Contenedor">
              <br />
              <input type="text" className="texto" name="" id="" />
              <label className="label">Profesor citado</label>
            </div>
          </td>
          <td>
            <button className="cancelarcita">Cancelar Cita</button>
          </td>
          <td>
            <button className="aceptar">Aceptar Cita</button>
          </td>
        </tr>
      </table>
      <hr />
      <h2 style={{ fontSize: 15 }}>Búsquedas Citas</h2>
    </div>
  );
}
function Datos(){
    
    const [opt, setOpt] = useState(0)
    let x
    if (opt === 0){
        x = <table className="tablaDatos"><br/>
        <tr>
            <td><div className="Contenedor"><br/><input type="text" class="texto3" name="" id=""/><label class="label3">Ususario</label></div></td>
        </tr>
        <tr>
            <td><div className="Contenedor"><input type="password" class="texto3" name="" id=""/><label class="label3">Nombres</label></div></td>
            <td><div className="Contenedor"><input type="password" class="texto3" name="" id="" /><label class="label3">Primer Apellido</label></div></td>
            <td><div className="Contenedor"><input type="password" class="texto3" name="" id="" /><label class="label3">Segundo Apellido</label></div></td>
        </tr>
        </table>
    }
    else if(opt === 1){
        x = <table className="tablaDatos"><br/>
        <tr>
            <td><div className="Contenedor"><input type="text" class="texto3"/><label htmlFor="" class="label3">Universidad</label></div></td>
            <td><div className="Contenedor"><input type="text" class="texto3" name="" id=""/><label htmlFor="" class="label3">País</label></div></td>
        </tr>
        <tr>
            <td><div className="Contenedor"><br/><input type="text" class="texto3" name=""/><label class="label3">Distrito</label></div></td>
        </tr>   
        </table>
    }
    else{
        x = <table className="tablaDatos"><br/>
            <tr><div className="Contenedor"><br/><input type="text" class="texto2" name=""/><label class="label2">Carrera</label></div></tr>
            <tr><div className="Contenedor"><br/><input type="text" class="texto2" name=""/><label class="label2">Facultad</label></div></tr>
            </table>
    }
    return <div><button className="datos" onClick={()=>setOpt(0)}>Nombre</button><button className="datos" onClick={()=>setOpt(1)}>Universidad</button><button className="datos" onClick={()=>setOpt(2)}>Carrera</button>
    {x}
    </div>
}

function reservarcita() {
    return <div>
        <div className="row">
        <div className="col-md-11"><Info/>
        <Datos/></div>
    </div>
    </div>
}

export default reservarcita