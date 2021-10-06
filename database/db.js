const Sequelize = require('sequelize')   //se ocupa cu schimbul de date cu baza de date mysql
const db = {}
const sequelize = new Sequelize('node_login1', 'root', '', { //conexiunea cu baza de date
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {       //pool se ocupa cu detaliile conexiunii
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db    //pentru exportarea modulului