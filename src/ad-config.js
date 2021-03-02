const adConfig = {
  appId: process.env.REACT_APP_AZURE_AD_CLIENT_ID,
  redirectUri: 'http://localhost:3001',
  scopes: [`https://${process.env.REACT_APP_AZURE_AD_ACCOUNT_NAME}.onmicrosoft.com/${process.env.REACT_APP_AZURE_AD_CLIENT_ID}/simple-scope`, 'openid', 'offline_access'],
  authority: `https://${process.env.REACT_APP_AZURE_AD_ACCOUNT_NAME}.b2clogin.com/${process.env.REACT_APP_AZURE_AD_ACCOUNT_NAME}.onmicrosoft.com/B2C_1_SIGN_UP_SIGN_IN1`,
};
export default adConfig
