import React, { Component } from 'react';
import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
  }
  from 'mdb-react-ui-kit';

const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies(); 
class Login extends Component { 
    state={
        form:{
            user: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {user: this.state.form.user, password: this.state.form.password}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('user', respuesta.user, {path: "/"});
                alert(`Bienvenido ${respuesta.user}`);
                window.location.href="./menu";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount() {
        if(cookies.get('user')){
            window.location.href="./menu";
        }
    }
    render() {
        return (
        <MDBContainer fluid>

        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '2rem', maxWidth: '420px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Ingrese su usuario y contraseña!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Usuario' id='formControlLg' type='text' name="user"
                  onChange={this.handleChange} size="lg"/>
              <MDBInput wrapperClass='mb-5 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' name="password"
                  onChange={this.handleChange} size="lg"/>
            
            <p className="small mb-3 pb-lg-2"></p>
              <MDBBtn className='w-100 mb-4 btn btn-light' color='white' onClick={()=> this.iniciarSesion()} size='md'>
                Iniciar Sesión
              </MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
        );
    }
}

export default Login;