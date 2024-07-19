import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({
  name: "t_aaa"
})
export class Aaa {
  @PrimaryGeneratedColumn({
    comment: "id"
  }) // 自增组件
  id: number

  @Column({
    name: "a_aa",
    type: "text",
    comment: "aaa"
  })
  aaa: string

  @Column({
    unique: true, // 唯一索引
    nullable: false, // not null 约束
    length: 10,
    type: "varchar",
    default: "bbb"
  })
  bbb: string

  @Column({
    type: "double"
  })
  ccc: number
}
