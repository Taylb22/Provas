import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()
let connection
export default connection = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    port : process.env.PORT
})