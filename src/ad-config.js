const adConfig = {
  appId: process.env.REACT_APP_AZURE_AD_CLIENT_ID,
  redirectUri: 'http://localhost:3001',
  authority: `https://${process.env.REACT_APP_AZURE_AD_ACCOUNT_NAME}.b2clogin.com/${process.env.REACT_APP_AZURE_AD_ACCOUNT_NAME}.onmicrosoft.com/B2C_1_SIGN_UP_SIGN_IN1`,
  organization_authority: `https://login.microsoftonline.com/ed3b5426-dadf-4250-bc15-9e6aefe47fd6/oauth2/v2.0/authorize`,
  scopes: [
    `https://${process.env.REACT_APP_AZURE_AD_ACCOUNT_NAME}.onmicrosoft.com/${process.env.REACT_APP_AZURE_AD_CLIENT_ID}/simple-scope`,
    'openid',
    'offline_access',
    'profile'
  ],
};
export default adConfig
