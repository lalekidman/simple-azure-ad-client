import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {PublicClientApplication} from '@azure/msal-browser';
import Config from '../ad-config';

const AADClientAuth = new PublicClientApplication({
  auth: {
    clientId: Config.appId,
    authority: `https://login.microsoftonline.com/ed3b5426-dadf-4250-bc15-9e6aefe47fd6/oauth2/v2.0/authorize`,
    redirectUri: Config.redirectUri,
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
        scopes: ['user.read'],
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
    </div>
  );
};

export default MainContainer
