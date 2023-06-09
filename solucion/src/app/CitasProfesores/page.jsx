"use client";
import "bootstrap/dist/css/bootstrap.css"; // Add this line
import { useEffect, useState } from "react";
import "./styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/navigation";

const CitasProfesores = () => {
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
    setCitas(Profesores);
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
              {citas.map((profesor) =>
                buttonText == "Ver citas pasadas" ? (
                  <Col className="contenedor">
                    <Row>
                      <Col className="subcontainer">
                        <div className="icono">
                          <span>{profesor.nombreCompleto.substring(0, 1)}</span>
                          <span>
                            {profesor.nombreCompleto.substring(
                              profesor.nombreCompleto.indexOf(" "),
                              profesor.nombreCompleto.indexOf(" ") + 2
                            )}
                          </span>
                        </div>
                      </Col>
                      <Col>
                        <div>{profesor.nombreCompleto}</div>
                        <div>{profesor.profesion}</div>
                      </Col>
                    </Row>
                    <Row className="imagen">
                      <div>IMAGEN</div>
                    </Row>
                    <Row>
                      <Col>
                        <div>
                          {profesor.dia} - {profesor.horarioInicio}
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
                          <span>{profesor.nombreCompleto.substring(0, 1)}</span>
                          <span>
                            {profesor.nombreCompleto.substring(
                              profesor.nombreCompleto.indexOf(" "),
                              profesor.nombreCompleto.indexOf(" ") + 2
                            )}
                          </span>
                        </div>
                      </Col>
                      <Col>
                        <div>{profesor.nombreCompleto}</div>
                        <div>{profesor.profesion}</div>
                      </Col>
                    </Row>
                    <Row className="imagen">
                      <div>IMAGEN</div>
                    </Row>
                    <Row>
                      <Col>
                        <div>
                          {profesor.dia} - {profesor.horarioInicio}
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

export default CitasProfesores;

let Profesores = [
  {
    id: 1,
    nombreCompleto: "Juan Lopez",
    profesion: "Mg. Ingeniería de Sistemas",
    // imagen: require("../../public/images/Profesor/profesor.png"),
    dia: "01/24/2023",
    horarioInicio: "08:00 am",
    curso: "Programación Web",
  },
  {
    id: 2,
    nombreCompleto: "Adriana Sanchez",
    profesion: "Mg. Ingeniería de Sistemas",
    // imagen: require("../../public/images/Profesor/profesora.png"),
    dia: "02/27/2023",
    horarioInicio: "04:00 pm",
    curso: "Programación orientada a objetos",
  },
  {
    id: 3,
    nombreCompleto: "Herbert Huaman",
    profesion: "Mg. Ingeniería de Sistemas",
    // imagen: require("../../public/images/Profesor/profesor.png"),
    dia: "06/23/2023",
    horarioInicio: "10:00 am",
    curso: "Programación Web",
  },
  {
    id: 4,
    nombreCompleto: "Marco Antonio",
    profesion: "Mg. Ingeniería de Sistemas",
    // imagen: require("../../public/images/Profesor/profesora.png"),
    dia: "06/30/2023",
    horarioInicio: "07:00 pm",
    curso: "Programación orientada a objetos",
  },
];
