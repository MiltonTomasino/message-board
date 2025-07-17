const { Pool } = require("pg");
require("dotenv").config()

module.exports = new Pool({
    host: "localhost",
    user: process.env.POSTGRES_NAME,
    database: "message_board",
    password: process.env.POSTGRES_PASSWORD,
    port:5432
})