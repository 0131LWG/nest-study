import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { In } from "typeorm"

// 插入
// AppDataSource.initialize()
//   .then(async () => {
//     const user = new User()
//     user.id = 1
//     user.firstName = "aaa111"
//     user.lastName = "bbb"
//     user.age = 25
//     await AppDataSource.manager.save(user)
//   })
//   .catch((error) => console.log(error))

// 批量插入 和 修改(加上id)
// AppDataSource.initialize()
//   .then(async () => {
//     await AppDataSource.manager.save(User, [
//       { id: 2, firstName: "ccc111", lastName: "ccc", age: 21 },
//       { id: 3, firstName: "ddd111", lastName: "ddd", age: 22 },
//       { id: 4, firstName: "eee111", lastName: "eee", age: 23 }
//     ])
//   })
//   .catch((error) => console.log(error))

// 删除和批量删除
// AppDataSource.initialize()
//   .then(async () => {
//     await AppDataSource.manager.delete(User, 1)
//     await AppDataSource.manager.delete(User, [2, 3])
//   })
//   .catch((error) => console.log(error))

// AppDataSource.initialize()
//   .then(async () => {
//     const user = new User()
//     user.id = 2

//     await AppDataSource.manager.remove(User, user)
//   })
//   .catch((error) => console.log(error))

// 查询
// AppDataSource.initialize()
//   .then(async () => {
//     const users = await AppDataSource.manager.find(User)
//     console.log(users)
//   })
//   .catch((error) => console.log(error))

// 根据条件查询
// AppDataSource.initialize()
//   .then(async () => {
//     const users = await AppDataSource.manager.findBy(User, {
//       age: 23
//     })
//     console.log(users)
//   })
//   .catch((error) => console.log(error))

// 获取有多少条记录
// AppDataSource.initialize()
//   .then(async () => {
//     const [users, count] = await AppDataSource.manager.findAndCountBy(User, {
//       age: 23
//     })
//     console.log(users, count)
//   })
//   .catch((error) => console.log(error))

// 查询一条
// AppDataSource.initialize()
//   .then(async () => {
//     const user = await AppDataSource.manager.find(User, {
//       select: {
//         firstName: true,
//         age: true
//       },
//       where: {
//         id: In([4, 2])
//       },
//       order: {
//         age: "ASC"
//       }
//     })
//     console.log(user)
//   })
//   .catch((error) => console.log(error))

// 复杂sql使用query builder
// AppDataSource.initialize()
//   .then(async () => {
//     const queryBuilder = await AppDataSource.manager.createQueryBuilder()

//     const user = await queryBuilder.select("user").from(User, "user").where("user.age = :age", { age: 21 }).getOne()
//     console.log("🚀 ~ queryFn ~ user:", user)
//   })
//   .catch((error) => console.log(error))

// 事务
AppDataSource.initialize()
  .then(async () => {
    await AppDataSource.manager.transaction(async (manager) => {
      await manager.save(User, {
        id: 4,
        firstName: "eee",
        lastName: "eee",
        age: 20
      })
    })
  })
  .catch((error) => console.log(error))
