require('dotenv').config()
module.exports = {
  development: {
    database: 'makepoetry_development',
    // host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    database: 'makepoetry_test',
    // host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    database: 'makepoetry_production',
    // host: '127.0.0.1',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
