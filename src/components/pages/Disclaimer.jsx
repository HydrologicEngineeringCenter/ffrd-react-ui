import React from 'react';
import { connect } from 'redux-bundler-react';

import { DisclaimerPrompt } from '@components/items';

function loginPage(props) {
  const { doUpdateUrl, authAccessToken } = props;

  if (authAccessToken) {
    const base = "/" + process.env.REACT_APP_HOMEPAGE?.replaceAll("/", "")
    doUpdateUrl(base + "/splash");
  }

  return (
    <div className="disclaimer h-screen w-screen">
      <div className="grid place-items-center">
        <DisclaimerPrompt />
      </div>
    </div>
  )
}

const Disclaimer = connect(
  "doUpdateUrl",
  "selectAuth_AccessToken",
  loginPage
)
export { Disclaimer }

