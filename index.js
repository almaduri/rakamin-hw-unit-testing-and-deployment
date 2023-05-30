const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const pool = require('./db')
app.get('/', async (req, res) => {
  const todos = await pool.query('select * from todo')
  res.json(todos.rows)
})

app.listen(3000)