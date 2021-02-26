const adConfig = {
  appId: `7dad8244-d201-41a9-9fa1-4236025372df`,
  redirectUri: 'http://localhost:3001',
  scopes: ['https://arfxhomedev.onmicrosoft.com/7dad8244-d201-41a9-9fa1-4236025372df/demo.read'],
  // scopes: ['https://arfxhomedev.onmicrosoft.com/7dad8244-d201-41a9-9fa1-4236025372df/simple-scope', 'offline_access', 'openid'],
  // authority: `https://arfxhomedev.b2clogin.com/arfxhomedev.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_SIGN_UP_SIGN_IN1&client_id=7dad8244-d201-41a9-9fa1-4236025372df&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fv1%2Fauth&scope=openid&response_type=id_token&prompt=login`,
  // authority: `https://arfxhomedev.b2clogin.com/arfxhomedev.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_SIGN_UP_SIGN_IN1&client_id=7dad8244-d201-41a9-9fa1-4236025372df&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fv1%2Fauth&scope=openid&response_type=id_token&prompt=login`,
  // authority: `https://login.microsoftonline.com/common`,
  // authority: `https://login.microsoftonline.com/arfxhomedev.onmicrosoft.com`,
  authority: `https://arfxhomedev.b2clogin.com/arfxhomedev.onmicrosoft.com/B2C_1_SIGN_UP_SIGN_IN1`,
  // authority: `https://login.microsoftonline.com/arfxhomedev.onmicrosoft.com/B2C_1_SIGN_UP_SIGN_IN1`,
  // authority: `https://login.microsoftonline.com/arfxhomedev.onmicrosoft.com/B2C_1_SIGN_UP_SIGN_IN1`,
  // authority: `https://login.microsoftonline.com/arfxhomedev.onmicrosoft.com/B2C_1_SIGN_UP_SIGN_IN1`,
  // authority: `https://graph.microsoft.com/v2.0/me`,
};

export default adConfig