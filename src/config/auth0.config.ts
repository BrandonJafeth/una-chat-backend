import { auth } from 'express-oauth2-jwt-bearer'
import { environmentConfig } from './environment'

export const jwtCheck = auth({
  audience: environmentConfig.auth0Audience,
  issuerBaseURL: environmentConfig.auth0Issuer,
  tokenSigningAlg: 'RS256',
})

export default jwtCheck
