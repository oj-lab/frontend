import React from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ListItems, NavProps } from "./ListItems";
import AccountMenu from "./AccountMenu";

const BarContent: React.FC<NavProps> = (props) => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Container maxWidth="xl">
          <ToolBar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              OJ-LAB
            </Typography>

            <ListItems selectedItem={props.selectedItem} />

            <AccountMenu />
          </ToolBar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

const Navbar: React.FC<NavProps> = (props) => {
  return <BarContent selectedItem={props.selectedItem} />;
};

export default Navbar;
