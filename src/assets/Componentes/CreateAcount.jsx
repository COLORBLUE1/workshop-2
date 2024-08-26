import React, { useEffect, useState } from 'react';
import { Button, ContainerFormLogin, ContainerLogin, ContainerTituloLogin, Formulario, ImagenLogoLogin, Input, IrCrearCuenta, Label, TituloLogin } from '../Styles/styled';
import logo from '../logo.png';
import useForm from '../hooks/useForm';
import { getData, postData } from '../helpers/Peticiones';
import { useNavigate } from 'react-router-dom';

const CreateAcount = () => {

  const [data, setData] = useState(null);
  const [formValues, handleInputChange, reset] = useForm({
    nombre: '',
    correo: '',
    pass: ''
  })

  const navigate = useNavigate();

  useEffect(() => {
    async function cargar() {
      const resp = await getData();
      setData(resp);
    }
    cargar();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    reset()

    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      if (formValues.correo === element.correo) {
        alert("el usuario existe, inicie sesion")
        break;
        // navigate("/validation")
      } else if (index === data.length - 1 && formValues.correo !== element.correo) {

        let nuevoUsuario = {
          id: element.id + 1,
          correo: formValues.correo,
          nombre: formValues.nombre,
          contraseña: formValues.pass,
          fotoPerfil: "",
          publicaciones: [],
          amigos: []
        };  

        const resp = await postData(nuevoUsuario);

        switch (resp) {
          case 201:
            alert('Usuario creado correctamente');
            navigate("/")
            break;
          case 404:
            alert('Ooops, Ocurrio un error');
            break;
          default:
            break;
        }
        break;
      }

    }
  }

  return (
    <>
      <ContainerLogin>

        <ContainerTituloLogin>
          <ImagenLogoLogin src={logo} />
          <TituloLogin>Crea una cuenta</TituloLogin>
        </ContainerTituloLogin>

        <ContainerFormLogin>
          <Formulario onSubmit={handleSubmit}>

            <Label>Nombre</Label>
            <Input value={formValues.nombre} onChange={handleInputChange} name="nombre" type='text' placeholder='Ingresa tu nombre' required />

            <Label>Correo electronico</Label>
            <Input value={formValues.correo} onChange={handleInputChange} name="correo" type='email' placeholder='Ingresa tu correo electronico' required />

            <Label>Contraseña</Label>
            <Input value={formValues.pass} onChange={handleInputChange} name="pass" type='password' placeholder='Ingresa una contraseña' required />

            <Button type="submit">Crear cuenta</Button>

          </Formulario>
          <IrCrearCuenta src="*" onClick={() => { navigate("/") }}> ¿Desea iniciar sesion? </IrCrearCuenta>
        </ContainerFormLogin>

      </ContainerLogin>
    </>
  )
}

export default CreateAcount


