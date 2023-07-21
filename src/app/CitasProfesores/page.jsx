"use client";
import "bootstrap/dist/css/bootstrap.css"; // Add this line
import { useEffect, useState } from "react";
import "./styles.css";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/navigation";



const CitasAlumnos = () => {
  
  const [citas, setCitas] = useState([]);
  // MODAL
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const [buttonText, setButtonText] = useState("Ver citas futuras");

  function handleClick() {
    if (buttonText == "Ver citas pasadas") {
      setButtonText("Ver citas futuras");
    } else {
      setButtonText("Ver citas pasadas");
    }
  }

  useEffect(() => {
    setCitas(Alumnos);
  }, []);

  const router = useRouter();


  return (
    <Row className="mt-4">
      <Col>
        <Row>
          <Col className="title">Mis citas</Col>
          {citas.length > 0 ? (
            <Col className="text-end">
              <Button className="firstButton">
                <span
                  className="firstTxt"
                  onClick={() => {
                    router.push("/reservaUsuario");
                  }}
                >
                  Programar una Cita
                </span>
              </Button>
            </Col>
          ) : (
            ""
          )}
        </Row>

        <hr />
        {citas.length > 0 ? (
          <>
            <Row>
              <Col className="subtitle">Citas de asesoría reservadas:</Col>
              <Col className="text-end">
                <Button className="secondButton" onClick={handleClick}>
                  <span className="secondTxt">{buttonText}</span>
                </Button>
              </Col>
            </Row>
            <Row>
              {citas.map((Alumnos) =>
                buttonText == "Ver citas pasadas" ? (
                  <Col className="contenedor">
                    <Row>
                      <Col className="subcontainer">
                        <div className="icono">
                          <span>{Alumnos.nombreCompleto.substring(0, 1)}</span>
                          <span>
                            {Alumnos.nombreCompleto.substring(
                              Alumnos.nombreCompleto.indexOf(" "),
                              Alumnos.nombreCompleto.indexOf(" ") + 2
                            )}
                          </span>
                        </div>
                      </Col>
                      <Col>
                        <div>{Alumnos.nombreCompleto}</div>
                        <div>{Alumnos.profesion}</div>
                      </Col>
                    </Row>
                    <Row className="imagen">
                      <div>IMAGEN</div>
                    </Row>
                    <Row>
                      <Col>
                        <div>
                          {Alumnos.dia} - {Alumnos.horarioInicio}
                        </div>
                      </Col>
                    </Row>
                    <div>Enlace de Zoom</div>
                    <Row>
                      <Col>
                        <button>Cancelar</button>
                      </Col>
                    </Row>
                  </Col>
                ) : (
                  <Col className="contenedor">
                    <Row>
                      <Col className="subcontainer">
                        <div className="icono">
                          <span>{Alumnos.nombreCompleto.substring(0, 1)}</span>
                          <span>
                            {Alumnos.nombreCompleto.substring(
                              Alumnos.nombreCompleto.indexOf(" "),
                              Alumnos.nombreCompleto.indexOf(" ") + 2
                            )}
                          </span>
                        </div>
                      </Col>
                      <Col>
                        <div>{Alumnos.nombreCompleto}</div>
                        <div>{Alumnos.profesion}</div>
                      </Col>
                    </Row>
                    <Row className="imagen">
                      <div >
                        <img src="...\src\app\Images\image_4.png" alt="x" />
                      </div>
                    </Row>
                    <Row>
                      <Col>
                        <div > 
                          {Alumnos.dia} - {Alumnos.horarioInicio}
                        </div>
                      </Col>
                    </Row>
                    <div>Enlace de Zoom</div>
                    <Row>
                      <Col>No califacdo</Col>
                      <Col>
                        <button onClick={handleShow}>Calificar</button>
                      </Col>
                    </Row>
                    {/* POPUP */}
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Woohoo, you are reading this text in a modal!
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Col>
                )
              )}
            </Row>
          </>
        ) : (
          <div>
            <Row>
              <Col className="noCitas">
                Actualmente no tiene citas de Asesoría reservadas
              </Col>
            </Row>
            <Row>
              <Col className="text-center mt-5">
                <Button className="firstButton">
                  <span
                    className="firstTxt"
                    onClick={() => {
                      router.push("/reservaUsuario");
                    }}
                  >
                    Programar una Cita
                  </span>
                </Button>
              </Col>
            </Row>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default CitasAlumnos;

let Alumnos = [
  {
    id: 10,
    nombreCompleto: "Jose Manuel MeLtran",
    profesion: "Estudiante de Ingeniería de Sistemas",
    imagen: "C:\Users\piero\OneDrive\Escritorio\HTML\TRABAJO DE CURSO\solucion\src\app\Images\image_4.png",
    dia: "01/24/2023",
    horarioInicio: "08:00 am",
    curso: "Programación Web",
  },
  {
    id: 20,
    nombreCompleto: "Adrian Balmaceda",
    profesion: "Mg. Ingeniería de Sistemas",
    imagen: "C:\Users\piero\OneDrive\Escritorio\HTML\TRABAJO DE CURSO\solucion\src\app\Images\image_5.png",
    dia: "02/27/2023",
    horarioInicio: "04:00 pm",
    curso: "Programación orientada a objetos",
  },
  {
    id: 30,
    nombreCompleto: "Humberto José",
    profesion: "Mg. Ingeniería de Sistemas",
    //imagen: require("../../public/images/Alumnos/Alumnos.png"),
    dia: "06/23/2023",
    horarioInicio: "10:00 am",
    curso: "Programación Web",
  },
  {
    id: 40,
    nombreCompleto: "Mark Antoni Pereyra",
    profesion: "Mg. Ingeniería de Sistemas",
    //imagen: require("../../public/images/Alumnos/Alumnosa.png"),
    dia: "06/30/2023",
    horarioInicio: "07:00 pm",
    curso: "Programación orientada a objetos",
  },
];
