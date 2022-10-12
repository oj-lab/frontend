import React from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ListItems, Props } from './ListItems';
import Copyright from './Copyright';
import AccountMenu from './AccountMenu';


const DashboardContent: React.FC<Props> = (props) => {
  const [currentUser, setCurrentUser] = React.useState(null);

  // TODO: get user session
  React.useEffect(() => {
    if (currentUser === null) { }
  });

  return (
    <React.Fragment>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <ToolBar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              OJ-LAB
            </Typography>

            <ListItems selectedItem={props.selectedItem} />

            <AccountMenu />

          </ToolBar>
        </Container>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </React.Fragment>

  );
}

const Dashboard: React.FC<Props> = (props) => {
  return <DashboardContent selectedItem={props.selectedItem} />;
}


export default Dashboard;
