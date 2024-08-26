import React, { useEffect, useState } from 'react';
import { Button, ContainerFormLogin, ContainerLogin, ContainerTituloLogin, Formulario, ImagenLogoLogin, Input, IrCrearCuenta, Label, TituloLogin } from '../Styles/styled';
import logo from '../logo.png';
import useForm from '../hooks/useForm';
import { getData } from '../helpers/Peticiones';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [data, setData] = useState(null);
    const [formValues, handleInputChange, reset] = useForm({
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

    const handleSubmit = e => {
        e.preventDefault();
        reset()

        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            console.log("entro al for", index, data.length);

                      
            if (formValues.correo === element.correo && formValues.pass === element.contraseña) {
                console.log("el usuario existe")
                // navigate("/validation")
            } else if (index === data.length - 1 && (formValues.correo !== element.correo || formValues.pass !== element.contraseña)) {
                alert("verifique sus datos, el correo o la contraseña estan incorrectas")
            }
            
        }
    }

    return (
        <>
            <ContainerLogin>

                <ContainerTituloLogin>
                    <ImagenLogoLogin src={logo} />
                    <TituloLogin>Iniciar sesion</TituloLogin>
                </ContainerTituloLogin>

                <ContainerFormLogin>
                    <Formulario onSubmit={handleSubmit}>
                        <Label>Correo electronico</Label>
                        <Input value={formValues.correo} onChange={handleInputChange} name="correo" type='email' placeholder='Ingresa tu correo electronico' required/> 

                        <Label>Contraseña</Label>
                        <Input value={formValues.pass} onChange={handleInputChange} name="pass" type='password' placeholder='Ingresa tu contraseña' required/>

                        <Button type="submit">Iniciar sesion</Button>

                    </Formulario>
                    <IrCrearCuenta src="*" onClick={() => { navigate("/create-account") }}> ¿Desea crear una cuenta? </IrCrearCuenta>
                </ContainerFormLogin>

            </ContainerLogin>
        </>
    )
}

export default Login
