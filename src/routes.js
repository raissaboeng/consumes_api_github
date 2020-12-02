const express = require('express')
const UserController = require('./controllers/UserController')
const AuthController = require('./controllers/AuthController')
const RepositorieController = require('./controllers/RepositorieController')
const routes = express.Router()

routes.post('/index', AuthController.auth)



routes.get('/users/:username', UserController.list)

routes.post('/users', UserController.store)

routes.put('/users/:id', UserController.update)

routes.delete('/users', UserController.delete)


routes.get('/users/:user_id/repositories', RepositorieController.list)

routes.post('/users/:user_id/repositories', RepositorieController.create)

routes.put('/users/:user_id/repositories/:id_rep', RepositorieController.update)

routes.delete('/users/:user_id/repositories', RepositorieController.delete )



module.exports = routes