"use client";
import "bootstrap/dist/css/bootstrap.css"; // Add this line
import { useEffect, useState } from "react";
import "./styles.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Image } from 'react-bootstrap';
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
                    <Image src="../../../../../public/images/image1.png"  alt="profesor" fluid />
  
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
                    <Image className="contenido" src={profesor.imagen} alt="Profesor" fluid/>
  
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
                    <Modal show={show} onHide={handleClose} className="custom-modal">
                      <Modal.Header className="custom-header">
                        <Modal.Title className="custom-title">Calificar Profesor</Modal.Title>
                      </Modal.Header>
                      <Modal.Body >
                      Seleccione la cantidad de estrellas que desea otorgarle (1 estrella = Mala, 5 estrellas = Excelente)):
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
    imagen: "https://i0.wp.com/www.lucaedu.com/wp-content/uploads/2022/01/iStock-1160927409.jpg?resize=1080%2C720&ssl=1",
    dia: "01/24/2023",
    horarioInicio: "08:00 am",
    curso: "Programación Web",
  },
  {
    id: 2,
    nombreCompleto: "Adriana Sanchez",
    profesion: "Mg. Ingeniería de Sistemas",
    imagen: "https://sites.google.com/a/glm.edu.co/syllabus-actualidad/_/rsrc/1468849745136/home/perfil-del-profesor/Obapersonal_%20073.jpg",
    dia: "02/27/2023",
    horarioInicio: "04:00 pm",
    curso: "Programación orientada a objetos",
  },
  {
    id: 3,
    nombreCompleto: "Herbert Huaman",
    profesion: "Mg. Ingeniería de Sistemas",
    imagen: "https://png.pngtree.com/background/20211215/original/pngtree-teacher-preparing-for-lessons-in-the-daytime-male-teacher-posing-in-picture-image_1496156.jpg",
    dia: "06/23/2023",
    horarioInicio: "10:00 am",
    curso: "Programación Web",
  },
  {
    id: 4,
    nombreCompleto: "Marco Antonio",
    profesion: "Mg. Ingeniería de Sistemas",
    imagen: "https://www.lucaedu.com/wp-content/uploads/2022/01/Banner-PerfilDocente.jpg",
    dia: "06/30/2023",
    horarioInicio: "07:00 pm",
    curso: "Programación orientada a objetos",
  },
];
