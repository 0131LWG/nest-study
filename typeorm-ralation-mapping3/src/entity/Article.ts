import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany } from "typeorm"
import { Tag } from "./Tag"

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 50,
    comment: "文章标题"
  })
  title: string

  @Column({
    type: "text",
    comment: "文章内容"
  })
  content: string

  @JoinTable()
  @ManyToMany(() => Tag, (tag) => tag.articles)
  tags: Tag[]
}
