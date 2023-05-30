const Pool = require('pg').Pool

const pool = new Pool({
  user: 'ali',
  password: 'pstgrs',
  database: 'todos',
  host: 'localhost',
  port: 5432
})

module.exports = pool