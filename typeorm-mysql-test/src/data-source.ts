import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "guan1024",
  database: "practice",
  synchronize: true,
  entities: [User],
  logging: true,
  migrations: [],
  subscribers: [],
  connectorPackage: "mysql2",
  extra: {
    authPlugin: "sha256_password"
  }
})
