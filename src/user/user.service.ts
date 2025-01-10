import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { UserAccount, Prisma } from '@prisma/client';


@Injectable()
export class UserService {

  constructor(private prisma: PrismaService) {}
// TODO: Add a way to update user profile, etc. 
  create(createUserDto: UserAccount) {
    return this.prisma.userAccount.create({
      data: createUserDto,
    });

  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
