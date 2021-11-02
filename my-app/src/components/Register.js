import React from 'react'

const Register = () => {
    return (
      <>
        <form id="register">
          <input placeholder="Email"></input>
          <input placeholder="Contraseña"></input>
          <input placeholder="Confirma tu contraseña"></input>
          <button>Ingresar</button>
          <button>Ingresar con Google</button>
        </form>
      </>
    );
  };
  
  export default Register;
