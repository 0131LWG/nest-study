import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  @InjectEntityManager()
  private manager: EntityManager;

  @InjectRepository(User)
  private userRepository: Repository<User>;

  create(createUserDto: CreateUserDto) {
    this.userRepository.save(createUserDto);
    // this.manager.save(User, createUserDto);
  }

  findAll() {
    return this.userRepository.find();
    // return this.manager.find(User);
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
    // return this.manager.findOne(User, {
    //   where: {
    //     id,
    //   },
    // });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.userRepository.save({
      id,
      ...updateUserDto,
    });
    // this.manager.save(User, {
    //   id,
    //   ...updateUserDto,
    // });
  }

  remove(id: number) {
    this.userRepository.delete(id);
    // this.manager.delete(User, id);
  }
}
