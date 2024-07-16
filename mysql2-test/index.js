const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "guan1024",
  database: "practice"
})

// connection.query("select * from customers", (err, results, fields) => {
//   console.log("🚀 ~ results:", results)
//   console.log(fields.map((item) => item.name))
// })

/**
 * @Author GUAN
 * @Desc 占位符查询
 */
connection.query("select * from customers where name like ?", ["李%"], (err, results, fields) => {
  console.log("🚀 ~ results:", results)
  console.log(fields.map((item) => item.name))
})

// 新增
// connection.execute("insert into customers (name) value (?)", ["李文冠"], (err) => {
//   console.log("🚀 ~ connection.execute ~ err:", err)
// })

// 修改
// connection.execute("update customers set name='李文冠2' where name='李文冠'", (err) => {
//   console.log("🚀 ~ connection.execute ~ err:", err)
// })

// 删除
// connection.execute('delete from customers where name="李文冠2"', (err) => {
//   console.log("🚀 ~ connection.execute ~ err:", err)
// })
