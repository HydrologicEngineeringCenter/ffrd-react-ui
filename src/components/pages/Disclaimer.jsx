import React from 'react';
import { connect } from 'redux-bundler-react';

import DisclaimerPrompt from '@components/items/DisclaimerPrompt';

function LoginPage(props) {
  const { doUpdateUrl, authAccessToken } = props;

  if (authAccessToken) {
    let base = process.env.REACT_APP_HOMEPAGE
    doUpdateUrl("/" + base + "/splash");
  }

  return (
    <div className="disclaimer h-screen w-screen">
      <div className="grid place-items-center">
        <DisclaimerPrompt />
      </div>
    </div>
  )
}

export default connect(
  "doAuth_UpdateUrl",
  "selectAuth_AccessToken",
  LoginPage
);

