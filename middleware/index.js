const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')

const authConfig = {
  domain: 'dev-q-xh7kmc.us.auth0.com',
  audience: 'http://localhost:3000'
}

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ['RS256']
})

module.exports = { checkJwt }
