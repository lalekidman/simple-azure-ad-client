import React, { useEffect } from 'react';
import {PublicClientApplication} from '@azure/msal-browser';
// import Config from '../ad-config';
const tenantId = 'ed3b5426-dadf-4250-bc15-9e6aefe47fd6'
const AADClientAuth = new PublicClientApplication({
  auth: {
    clientId: `ceea412b-1a99-4a30-b0a2-d857209d8169`,
    authority: `https://login.microsoftonline.com/arfxhomedev.onmicrosoft.com`,
    redirectUri: `http://localhost:3001`,
    validateAuthority: false,
    clientSecret: 'A6-WwjRuX-mRH5Ic7q_z2pB-2R4BoEu~_o',
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  }
})
console.log('object SSS');
const MainContainer = () => {
  const login = async () => {
    try {
      const login = await AADClientAuth.loginPopup({
        scopes: [
          'https://arfxhomedev.onmicrosoft.com/admin-portal/dev.read'
        ],
        // scopes: ['https://arfxhomedev.onmicrosoft.com/admin-portal/dev.read'],
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
          src="https://electronapps.blob.core.windows.net/public-blob/758b788c-778b-455a-ad5e-6784bea32eda/preview-gif.gif"
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
