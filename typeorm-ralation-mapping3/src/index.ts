import { AppDataSource } from "./data-source"
import { Article } from "./entity/Article"
import { Tag } from "./entity/Tag"

AppDataSource.initialize()
  .then(async () => {
    // const a1 = new Article()
    // a1.title = "aaaa"
    // a1.content = "aaaaaaaaaaaaa"

    // const a2 = new Article()
    // a2.title = "bbbb"
    // a2.content = "bbbbbbbbbbbbb"

    // const t1 = new Tag()
    // t1.name = "tag1"

    // const t2 = new Tag()
    // t2.name = "tag2"

    // const t3 = new Tag()
    // t3.name = "tag3"

    // a1.tags = [t1, t2]
    // a2.tags = [t1, t2, t3]

    const entityManager = AppDataSource.manager

    // await entityManager.save(t1)
    // await entityManager.save(t2)
    // await entityManager.save(t3)

    // await entityManager.save(a1)
    // await entityManager.save(a2)

    // const article = await entityManager.find(Article, {
    //   relations: {
    //     tags: true
    //   }
    // })

    // const article = await entityManager.createQueryBuilder(Article, "article").leftJoinAndSelect("article.tags", "tags").getMany()

    // const article = await entityManager.findOne(Article, {
    //   where: {
    //     id: 2
    //   },
    //   relations: {
    //     tags: true
    //   }
    // })

    // article.title = "cccc"
    // article.tags = article.tags.filter((item) => item.name.includes("tag1"))

    // await entityManager.save(article)

    // console.log(article)
    // console.log(article.map((item) => item.tags))
    // await entityManager.delete(Article, 1);
    // await entityManager.delete(Tag, 1)

    const tags = await entityManager.find(Tag, {
      relations: {
        articles: true
      }
    })

    console.log(tags)
  })
  .catch((error) => console.log(error))
