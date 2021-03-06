import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {PublicClientApplication} from '@azure/msal-browser';
import Config from '../ad-config';

const AADClientAuth = new PublicClientApplication({
  auth: {
    clientId: Config.appId,
    authority: Config.authority,
    // authority: `https://${Config.appId}.b2clogin.com/${Config.appId}.onmicrosoft.com/B2C_1_SIGN_UP_SIGN_IN1`,
    // authority: `https://login.microsoftonline.com/${Config.appId}.onmicrosoft.com/discovery/v2.0/keys?p=B2C_1_SIGN_UP_SIGN_IN1`,
    // authority: `https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration`,
    redirectUri: Config.redirectUri,
    validateAuthority: false,
    clientSecret: '.g5WpOIGzWhl2lCvnH_YoR37q-kNN1_8K7',
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  }
})
const MainContainer = () => {
  const login = async () => {
    try {
      const login = await AADClientAuth.loginPopup({
        scopes: Config.scopes,
        // prompt: 'select_account',
      });
    } catch (error) {
      console.log('error :>> ', error);
      throw error
    }
  }
  return (
    <div>
      <h1>Authorize Organization</h1>
      <div className="Hello">
        <button type="button" onClick={login}>
          Open File
        </button>
      </div>
      <h1>Images</h1>
      <img 
          src="https://electronapps.blob.core.windows.net/public-blob/bf10ae3f-9536-49d7-b932-f78f91bd3f64%2Fpreview-gif.gif"
          alt="simple gif"
          />
      <video
          width={500}
          autoPlay={true}
          src="https://electronapps.blob.core.windows.net/public-blob/bf10ae3f-9536-49d7-b932-f78f91bd3f64%2Fpreview-video.mp4"
          alt="simple gif"
          />
      <img 
          src="https://electronapps.blob.core.windows.net/public-blob/bf10ae3f-9536-49d7-b932-f78f91bd3f64%2Fthumbnail.png"
          alt="simple gif"
          />
      <img 
          src="https://electronapps.blob.core.windows.net/public-blob/bf10ae3f-9536-49d7-b932-f78f91bd3f64%2Fpreview-image.png"
          alt="simple gif"
          />
    </div>
  );
};

export default MainContainer
