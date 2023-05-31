const pool = require('../db')

const getAllTodos = async (req, res) => {
  const todos = await pool.query('select * from todo')
  return todos
}

module.exports = {
  getAllTodos
}