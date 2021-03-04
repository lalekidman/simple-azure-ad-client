import React, { useEffect } from 'react';
import {PublicClientApplication} from '@azure/msal-browser';
import Config from '../ad-config';

const AADClientAuth = new PublicClientApplication({
  auth: {
    clientId: Config.appId,
    authority: Config.authority,
    redirectUri: Config.redirectUri,
    knownAuthorities: ['arfxhomedev.onmicrosoft.com'],
    clientSecret: '.g5WpOIGzWhl2lCvnH_YoR37q-kNN1_8K7'
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
      <h1>Authorize B2C</h1>
      <div className="Hello">
        <button type="button" onClick={login}>
          Open File
        </button>
      </div>
    </div>
  );
};

export default MainContainer