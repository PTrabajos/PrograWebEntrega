'use client';

import './perfil1.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Chip from '../../components/Chip/Chip.jsx'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import showForm from 'react'

const PerfilDocente = () => {

    function showForm(formName) {
        var forms = document.getElementsByClassName('form-container');
        for (var i = 0; i < forms.length; i++) {
            forms[i];
        }
        
    }

  
    const router = useRouter()
    {
        
    

    return (
        <div>  
            <div class="middlebar">
                <h2>MI PERFIL</h2>
                <div class="boton">
                    <Button>Cancelar</Button>
                    &nbsp;
                    <Button class="button">Guardar</Button>
                </div>
            </div>

            <hr class="linea" />
            
            <br/> 
            <div class="barra"> 
                <h2>
                    Informacion Personal
                </h2>
            </div>

            <div className="img"><img src ="https://media.tenor.com/vjDSipHhsjAAAAAd/fortnite-snake-eyes.gif" style ={{ width:"45%"}} alt=""/></div>
        
            <br/>
                
           <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Nombres</label>
                    <input type="text" class="form-control" 
                    id="validationCustom01" 
                    placeholder="" 
                    required/>
                  
                </div> 
                <div class="col-md-2">
                    <label for="validationCustom02" class="form-label">Apellidos</label>
                    <input type="text" 
                    class="form-control" 
                    id="validationCustom02" 
                    placeholder="" 
                    required/>
                </div>

                <div class="col-md-5">
                    <label for="validationCustomUsername" class="form-label">Documentos</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername" 
                        aria-describedby="inputGroupPrepend" required/>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Rol</label>
                    <input type="text" 
                    class="form-control" 
                    id="validationCustom03" 
                    placeholder=""
                    required/>
                    <div class="invalid-feedback">
                   
                    </div>
                </div>

               
                <div class="col-md-3">
                    <label for="validationCustom05" class="form-label">Numero</label>
                    <input type="text" class="form-control" id="validationCustom05" required/>
                    <div class="invalid-feedback">

                    </div>
                </div>
            </form>

            <br/> <br/>

            <div>
                <header class="cabecera">
                    
                    <button onClick={() => showForm()}><h4 class="nav">Datos de usuario </h4></button>
                    <button onClick={() => showForm()}><h4 class="nav"> Universidad </h4></button>
                    <button onClick={() => showForm()}><h4 class="nav">Presentación </h4></button>
                </header>

                <div>
                <div class="contenido"> 
            
                    <div id="userForm" class="form-container"> 
                        <form>
                            <input type="text" placeholder="Usuario"/>
                            <br/> <br/>
                            <input type="password" placeholder="Contraseña"/>
                            <br/><br/>
                            
                        </form>
                    </div>

                    <div id="universityForm" class="form-container">
                        <form>
                            <input type="text" placeholder="Nombre de la universidad"/>
                            <input type="text" placeholder="Carrera"/>
                            <input type="text" placeholder="Cursos"/>
                        
                        </form>
                    </div>

                    <div id="presentationForm"  class="form-container">
                        <form>
                            <input type="text" placeholder="Título de profesión"/>
                            <input type="text" placeholder="Curso especializado"/>
                        
                        </form>
                    </div>

         
                </div> 


                </div>

            </div>
        </div>       
    )
} 
}
export default PerfilDocente