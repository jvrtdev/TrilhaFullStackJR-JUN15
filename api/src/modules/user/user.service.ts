import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const { password, ...rest } = data
    const hash = await bcrypt.hash(password, 10)
    
    return await this.prisma.user.create({ data: {
      ...rest,
      password: hash
    } });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(user: Prisma.UserWhereUniqueInput | any): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: user,
    });
  }

  async update(
    where: Prisma.UserWhereUniqueInput | any,
    data: Prisma.UserUpdateInput
  ): Promise<User> {
    return await this.prisma.user.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.UserWhereUniqueInput | any) {
    return await this.prisma.user.delete({
      where,
    });
  }
}
