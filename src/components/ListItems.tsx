import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/system";

export interface NavProps {
  selectedItem: "Dashboard" | "Problems";
}

const NavbarLink = styled(NavLink)({
  color: "inherit",
  textDecoration: "none",
  textTransform: "none",
});

export const ListItems: React.FC<NavProps> = (props) => {
  // TODO: underline current page by props.selectedItem
  return (
    <List component={Stack} direction="row">
      <ListItem button>
        <NavbarLink to="/Dashboard">Dashboard</NavbarLink>
      </ListItem>
      <ListItem button>
        <NavbarLink to="/Problems">Problems</NavbarLink>
      </ListItem>
      <ListItem button>
        <NavbarLink to="/Status">Status</NavbarLink>
      </ListItem>
    </List>
  );
};
