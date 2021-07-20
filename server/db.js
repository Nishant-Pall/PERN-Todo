const Pool = require("pg").Pool


const pool = new Pool({
	user: "prhyme",
	password: "root",
	host: "localhost",
	port: 5432,
	database: "perntodo"
})

module.exports = pool