import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ContenedorNavber } from "../Styles/styledone.js";
import { useNavigate } from "react-router";
import { BsHouseFill, BsBellFill, BsPlusLg, BsSearch } from "react-icons/bs";
import { Avatar } from "@mui/material";

export function Navbar() {
  const [value, setValue] = React.useState("recents");
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case "main":
        navigate("/main");

        {
          break;
        }
      case "buscar":
        navigate("/buscar");
        {
          break;
        }

      case "reciente":
        navigate("/reciente");
        {
          break;
        }

      case "cuenta": {
        navigate("/cuenta");

        break;
      }

      default: {
        navigate("/");
        break;
      }
    }
  };

  return (
    <ContenedorNavber>
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="." value="main" icon={<BsHouseFill />} />
        <BottomNavigationAction
          label="buscar"
          value="buscar"
          icon={<BsSearch />}
        />
        <BottomNavigationAction
          label="publicar"
          value="publicar"
          icon={<BsPlusLg />}
        />
        <BottomNavigationAction
          label="notificacion"
          value="folder"
          icon={<BsBellFill />}
        />
        <BottomNavigationAction
          label="cuenta"
          value="cuenta"
          icon={<Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 30, height: 30 }}
          />}
        />
      </BottomNavigation>
    </ContenedorNavber>
  );
}
