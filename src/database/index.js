const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../models/User')
const Token = require('../models/Token')
const Repositorie = require('../models/Repositorie')

const connection = new Sequelize(dbConfig)

User.init(connection)
Token.init(connection)
Repositorie.init(connection)

Token.associate(connection.models)
Repositorie.associate(connection.models)

module.exports = connection