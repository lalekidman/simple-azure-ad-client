import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {PublicClientApplication} from '@azure/msal-browser';
import Config from './ad-config';

const AADClientAuth = new PublicClientApplication({
  auth: {
    clientId: Config.appId,
    authority: Config.authority,
    redirectUri: Config.redirectUri,
    knownAuthorities: ['arfxhomedev.onmicrosoft.com'],
    clientSecret: '.g5WpOIGzWhl2lCvnH_YoR37q-kNN1_8K7'
    // authorityMetadata: 'https://login.microsoftonline.com/shawmakesmagicgmail.onmicrosoft.com/oauth2/token'
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
    console.dir('login :>> ', login);
    const ftoken = await AADClientAuth.acquireTokenSilent({
      scopes: ['https://arfxhomedev.onmicrosoft.com/7dad8244-d201-41a9-9fa1-4236025372df/demo.read'],
      forceRefresh: true
    });
    console.dir('login :>> ', ftoken);
  }
  useEffect(() => {
    const accounts = AADClientAuth.getAllAccounts();
    console.log('accounts :>> ', accounts);
  }, [])
  return (
    <div>
      <h1>Open Hellox World.txt</h1>
      <div className="Hello">
        <button type="button" onClick={login}>
          Open File
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainContainer} />
      </Switch>
    </Router>
  );
}
