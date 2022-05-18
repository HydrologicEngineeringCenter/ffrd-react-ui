import { connect } from 'redux-bundler-react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import castleIcon from '@src/static/castle.png';

function navBar(props) {
  // const { authFullname: userName } = props;
  const base = process.env.REACT_APP_HOMEPAGE

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          href={base}
        >
          <Box
            component="img"
            sx={{
              width: 45,
            }}
            alt="USACE castle logo"
            src={castleIcon}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

const NavBar = connect(
  'selectAuth_Fullname',
  navBar
)

export { NavBar }

