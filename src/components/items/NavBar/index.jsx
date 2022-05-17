import React from 'react';
import { connect } from 'redux-bundler-react'
import AppBar from '@mui/material/AppBar'

const NavBar = (props) => {
  const { authFullname: userName } = props;
  const base = process.env.REACT_APP_HOMEPAGE

  return (
    <AppBar position="static">
    </AppBar>
  )
}
export default connect(
  'selectAuthFullname',
  NavBar
);

