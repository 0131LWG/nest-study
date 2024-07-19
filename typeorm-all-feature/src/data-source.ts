import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Aaa } from "./entity/Aaa"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "guan1024",
  database: "practice",
  synchronize: true, // 同步建表
  logging: true,
  entities: [User, Aaa], // 有哪些实体 ['./**/entity/*.ts']
  migrations: [], // 修改表结构的sql
  subscribers: [], //  entity生命周期的订阅者，insert,update,remove 前后
  poolSize: 10,
  connectorPackage: "mysql2", // 指定驱动
  extra: {
    authPlugin: "sha256_password"
  }
})
