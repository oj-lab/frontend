import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CloudIcon from '@mui/icons-material/Cloud';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import QuizIcon from '@mui/icons-material/Quiz';


export interface Props {
  selectedItem: 'Dashboard' | 'Problems'
}

const ListItems: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <ListItemButton href='/Dashboard' selected={props.selectedItem === "Dashboard"}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton href='/Problems' selected={props.selectedItem === "Problems"}>
        <ListItemIcon>
          <QuizIcon />
        </ListItemIcon>
        <ListItemText primary="Problems" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <CloudIcon />
        </ListItemIcon>
        <ListItemText primary="Machines" />
      </ListItemButton>
    </React.Fragment>
  );
}

export default ListItems;
