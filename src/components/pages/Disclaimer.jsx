import React, { Fragment } from 'react';
import { connect } from 'redux-bundler-react';
import NavBar from '@components/items/NavBar';

function LoginPage(props) {

  // const { doUpdateUrl, authAccessToken } = props;

  // maintain client-side routing for organization instead of relying on the authorization server
  // if (authAccessToken) {
  //   let base = process.env.REACT_APP_HOMEPAGE
  //   doUpdateUrl("/" + base + "/splash");
  // }

  return (
    <Fragment>
      <NavBar />
    </Fragment >
  )
}

export default connect(
  // "doAuth_UpdateUrl",
  // "selectAuth_AccessToken",
  LoginPage
);

