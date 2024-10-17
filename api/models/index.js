const dbConfig = require('../config/db.config.js')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

/* Create database tables and models */
db.contacts = require('./contact.model.js')(sequelize, Sequelize)
db.phones = require('./phone.model.js')(sequelize, Sequelize)
db.companies = require('./company.model.js')(sequelize, Sequelize)

// Sync the models with the database
db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log('Database synced successfully!')
  })
  .catch((err) => {
    console.log('Error syncing database:', err)
  })

module.exports = db
