import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import {
  Contenedorheadermain,
  Contenedorheaderone,
  Historicontenedor,
  Logo,
} from "../Styles/styledone";

export function Headerone() {
  return (
    <Contenedorheadermain>
      <Contenedorheaderone>
        <div>
          <Logo
            src="https://images.unsplash.com/photo-1719937051230-8798ae2ebe86?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div>
          <Stack spacing={4} direction="row" sx={{ color: "action.active" }}>
            <Badge color="secondary" badgeContent={0}>
              <MailIcon />
            </Badge>
            <Badge color="secondary" badgeContent={0} showZero>
              <MailIcon />
            </Badge>
          </Stack>
        </div>
      </Contenedorheaderone>

      <Historicontenedor>
        <Stack direction="row" spacing={2}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
          />
        </Stack>

        {/* <Stack direction="row" spacing={2}>
          <Avatar alt={} src={{}} />
        </Stack> */}
      </Historicontenedor>
    </Contenedorheadermain>
  );
}
