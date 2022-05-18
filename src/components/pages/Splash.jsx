import React from 'react';
import { connect } from 'redux-bundler-react';

import { SplashPageButton } from '@components/items'

function splashPage(props) {
  const { doUpdateUrl, authAccessToken } = props;

  // if (!authAccessToken) {
  //   const base = "/" + process.env.REACT_APP_HOMEPAGE?.replaceAll("/", "")
  //   doUpdateUrl(base);
  // }

  return (
    <div className="disclaimer h-screen w-screen">
      <div className="grid place-items-center">
        <SplashPageButton>
        </SplashPageButton>
      </div>
    </div>
  )
}

const Splash = connect(
  "doUpdateUrl",
  "selectAuth_AccessToken",
  splashPage
)
export { Splash }
