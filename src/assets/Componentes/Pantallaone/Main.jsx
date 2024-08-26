import { Headerone } from "../../Block/Headerone";
import Avatar from "@mui/material/Avatar";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Sectionmain } from "../../Styles/styledone";
import { BsHeart, BsChat, BsSend, BsBookmark } from "react-icons/bs";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center the cards horizontally
  gap: '16px', // Space between cards
  padding: '16px' // Optional padding around the container
});

export function Main() {
  const [usuarios, setUsuarios] = React.useState([]);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    // Fetch data from the API
    fetch("https://api-socialmediaapp-render.onrender.com/usuarios")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Headerone />

      <Sectionmain>
        <CardContainer>
          {usuarios.flatMap((usuario) =>
            usuario.publicaciones.map((publicacion) => (
              <Card key={publicacion.idPublicacion} sx={{ maxWidth: 400, width: 350 }}>
                <CardHeader
                  avatar={
                    <Avatar  src={usuario.fotoPerfil} sx={{ bgcolor: red[500] }} aria-label="recipe">
                      {usuario.nombre.charAt(0)}
                      
                    </Avatar>
                  }
                  title={usuario.nombre}
                 
                />
                <CardMedia
                  sx={{
                    height: 400,
                    width: "95%",
                    margin: "auto",
                    borderRadius: 5,
                  }}
                  component="img"
                  image={publicacion.publicacion} // URL de la imagen de la publicación
                  alt={publicacion.descripcion || "Post image"}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {publicacion.descripcion || "No description available"}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <BsHeart />
                  </IconButton>
                  <IconButton aria-label="comment">
                    <BsChat />
                  </IconButton>
                  <IconButton aria-label="share">
                    <BsSend />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <BsBookmark />
                  </ExpandMore>
                </CardActions>
              </Card>
            ))
          )}
        </CardContainer>
      </Sectionmain>
    </div>
  );
}
