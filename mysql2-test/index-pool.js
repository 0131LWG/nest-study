const mysql = require("mysql2/promise")

;(async function () {
  const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "guan1024",
    database: "practice",
    waitForConnections: true,
    connectionLimit: 10, // 指定最多有多少链接数，同时10个
    queueLimit: 0, // 超出链接数后排队等待的最大数量
    maxIdle: 10, // 最大空闲链接数
    idleTimeout: 60000, // 空闲的连接多久会断开
    enableKeepAlive: true, // 保持心跳
    keepAliveInitialDelay: 0
  })

  const [results] = await pool.query("select * from customers")
  console.log("🚀 ~ results:", results)
})()
