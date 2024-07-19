import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { IdCard } from "./entity/IdCard"

// AppDataSource.initialize()
//   .then(async () => {
//     const user = new User()
//     user.firstName = "guan"
//     user.lastName = "guan"
//     user.age = 20

//     const idCard = new IdCard()
//     idCard.cardName = "1234567890"
//     idCard.user = user

//     await AppDataSource.manager.save(user)
//     await AppDataSource.manager.save(idCard)
//   })
//   .catch((error) => console.log(error))

AppDataSource.initialize().then(async () => {
  //   const ics = await AppDataSource.manager.find(IdCard, {
  //     relations: {
  //       user: true
  //     }
  //   })
  //   console.log(ics)

  //   const ics = await AppDataSource.manager.getRepository(IdCard).createQueryBuilder("ic").leftJoinAndSelect("ic.user", "u").getMany()
  //   console.log(ics)

  //   const ics = await AppDataSource.manager.createQueryBuilder(IdCard, "ic").leftJoinAndSelect("ic.user", "u").getMany()
  //   console.log(ics)

  //   const user = new User()
  //   user.id = 3
  //   user.firstName = "guan688"
  //   user.lastName = "guan688"
  //   user.age = 688

  //   const idCard = new IdCard()
  //   idCard.id = 2
  //   idCard.cardName = "44058219970131"
  //   idCard.user = user

  //   await AppDataSource.manager.save(idCard)
  //   await AppDataSource.manager.delete(User, 1)

  const user = await AppDataSource.manager.find(User, {
    relations: {
      idCard: true
    }
  })
  console.log(user)
})
