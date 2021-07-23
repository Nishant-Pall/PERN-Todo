// const Pool = require("pg").Pool
import pg from 'pg';
const { Pool } = pg

const pool = new Pool({
	user: "prhyme",
	password: "root",
	host: "localhost",
	port: 5432,
	database: "perntodo"
})

export default pool