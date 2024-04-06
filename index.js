// require('./app/index')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser') // Parse json in req
const fs = require('fs')
const db = require('./db/queries')
const app = express()
const port = 3000
const users = []

// Adding middlewares
app.use((request, response, next) => {
console.log(request.headers)
next()
})

app.use((request, response, next) => {
request.chance = 'Node.js, Express, and Postgres API' //Perform some business logic
next()
})

// Middleware to parse JSON in the request body
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Default Route
app.get('/', (request, response) => {
    // Used to process response from middleware
    response.json({
        server_info: request.chance
      })
  })

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

// Error Handling
app.use((err, request, response, next) => {
    console.log(err)
    response.status(500).send('Something broke!')
  })

app.listen(port, (err) => {
if (err) {
    return console.log('something bad happened', err)
}

console.log(`server is listening on ${port}`)
})
