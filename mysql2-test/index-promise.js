const mysql = require("mysql2/promise")

;(async function () {
  const connection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "guan1024",
    database: "practice"
  })

  const [results, fields] = await connection.query("select * from customers")
  console.log("🚀 ~ results:", results)
  console.log(fields.map((item) => item.name))
})()
