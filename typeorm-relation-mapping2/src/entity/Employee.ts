import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Department } from "./Department"

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 50
  })
  name: string

  @ManyToOne(() => Department, {
    onDelete: "CASCADE"
  })
  department: Department
}
