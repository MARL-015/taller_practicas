import React, { Component} from 'react';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../css/Login.css';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {
    MDBContainer
  }
  from 'mdb-react-ui-kit';
const cookies = new Cookies();

class Menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('user', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('user')){
            window.location.href="./";
        }
    }

    render() {
        console.log('user: '+cookies.get('user'));
        return (
            <div>
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Bienvenido </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                </Nav>
                <Nav className="d-flex">
                    <Button variant="outline-light" className="btn btn-danger" onClick={()=>this.cerrarSesion()} >Cerrar Sesión</Button>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <br/>
            <MDBContainer fluid>
            <Card>
            <Card.Header className="card bg-dark text-white">Facultad de Ingeniería</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    La Facultad de Ingeniería se dedica a la formación de profesionales de prestigio, cuyos conocimientos contribuyen al progreso científico y tecnológico de Guatemala.

                    En esta unidad académica se desempeñan seis escuelas facultativas de pregrado que disponen
                    de doce carreras, una escuela de postgrado con carácter regional centroamericano; además, del Centro 
                    de Investigaciones de Ingeniería (CII), de manera que su proyección es amplia hacia diversas actividades económicas y sociales del país.{' '}
                </p>
                <footer className="blockquote-footer">
                     <cite title="Source Title">Facultad Ingeniería</cite>
                </footer>
                </blockquote>
            </Card.Body>
            </Card>
            <br/><br/>
            <CardGroup>
            <Card>
              <Card.Img variant="primary" src="https://i.postimg.cc/zGc0TH4v/objetivo.png" className='img-mediana' />
              <Card.Body>
                <Card.Title>MISIÓN</Card.Title>
                <Card.Text>
                Formar profesionales en las distintas áreas de la Ingeniería que, a través de la aplicación de la ciencia y 
                la tecnología, conscientes de la realidad nacional y regional, y comprometidos con nuestras sociedades, sean
                capaces de generar soluciones que se adapten a los desafíos del desarrollo sostenible y los retos del contexto global.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="primary" src="https://i.postimg.cc/tszLgXk8/vision-estrategica.png" className='img-mediana' />
              <Card.Body>
                <Card.Title>VISIÓN</Card.Title>
                <Card.Text>
                Ser una institución académica con incidencia en la solución de la problemática nacional; formamos profesionales en las 
                distintas áreas de la ingeniería, con sólidos conceptos científicos, tecnológicos, éticos y sociales, fundamentados en
                la investigación y promoción de procesos innovadores orientados hacia la excelencia profesional.{' '}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="primary" src="https://i.postimg.cc/cgVscsVX/exito.png" className='img-mediana'/>
              <Card.Body>
                <Card.Title>OBJETIVO GENERAL</Card.Title>
                <Card.Text>
                Formar el recurso humano dentro del área técnico-científica que necesita el desarrollo de Guatemala, dentro del ambiente físico,
                natural, social, económico, antropológico y cultural del medio que lo rodea, para que pueda servir al país en forma 
                eficiente y eficaz como profesional de la ingeniería.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          <br/>
          <Card border="warning" style={{ width: '93rem' }}>
        <Card.Header className="card bg-dark text-white">OBJETIVOS ESPECÍFICOS</Card.Header>
        <Card.Body>
          <Card.Text>
         1.  Proporcionar, al estudiantado de la Facultad de Ingeniería las oportunidades para obtener una formación técnico-científica, para su aplicación
        al medio laboral y adaptación a la tecnología moderna.
          </Card.Text>
          <Card.Text>
          2. Fomentar la investigación científica y el desarrollo de la tecnología y ciencias entre los estudiantes y catedráticos de la Facultad de Ingeniería, con proyección y como resarcimiento para el pueblo de Guatemala.
          </Card.Text>
          <Card.Text>
            3. Fortalecer las relaciones con los sectores externos del país, que se vinculan con las diversas ramas de la ingeniería y contribuir a satisfacer sus necesidades, lo cual generará el beneficio mutuo.
          </Card.Text>
        </Card.Body>
      </Card>
          </MDBContainer>
          </div>
        );
    }
}

export default Menu;