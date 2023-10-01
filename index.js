// GET request: /hello return "Hello Express JS"
// GET request: /user return  { "firstname":"Pritesh", "lastname": "Patel" }. Use Querystring to send values
// POST request: /user return  { "firstname":"Pritesh", "lastname": "Patel" }. Use path parameter to send values
const express = require('express')
const app = express()
const port = 8080

app.get('/hello', (req, res) => {
  res.send('Hello Express JS!')
})
app.get('/user', (req, res) => {
  var firstname = req.query.firstname
  var lastname = req.query.lastname

  res.json({
    firstname,lastname
  })
})
app.post('/user/:fname/:lname', (req, res) => {
  const {fname, lname} = req.params
  res.json(fname,lname)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})