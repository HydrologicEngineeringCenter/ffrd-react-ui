import { connect } from 'redux-bundler-react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

const NavBar = (props) => {
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
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Photos
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default connect(
  // 'selectAuthFullname',
  NavBar
);

