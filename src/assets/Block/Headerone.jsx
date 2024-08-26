import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Contenedorheadermain, Contenedorheaderone, Historicontenedor, Logo } from "../Styles/styledone";
import { BsChatDots, BsHeart } from "react-icons/bs";

export function Headerone() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Fetch data from the API
   fetch("https://api-socialmediaapp-render.onrender.com/usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <Contenedorheadermain>
      <Contenedorheaderone>
        <div>
          <Logo
            src="https://images.unsplash.com/photo-1719937051230-8798ae2ebe86?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Logo"
          />
        </div>

        <div>
          <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
            <Badge color="secondary" badgeContent={0}>
              <BsHeart />
            </Badge>
            <Badge color="secondary" badgeContent={0} showZero>
              <BsChatDots />
            </Badge>
          </Stack>
        </div>
      </Contenedorheaderone>

      <Historicontenedor>
        <Stack direction="row" spacing={2}>
          {usuarios.map((usuario) => (
            <Avatar
              key={usuario.id}
              sx={{ width: 56, height: 56 }}
              alt={usuario.nombre}
              src={usuario.fotoPerfil}
            >
              {usuario.nombre.charAt(0)}
            </Avatar>
          ))}
        </Stack>
      </Historicontenedor>
    </Contenedorheadermain>
  );
}
