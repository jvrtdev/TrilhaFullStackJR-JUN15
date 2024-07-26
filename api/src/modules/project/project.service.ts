import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.ProjectCreateInput) {
    return await this.prisma.project.create({ data });
  }

  async findAll() {
    return await this.prisma.project.findMany();
  }

  async findOne(project: Prisma.ProjectWhereUniqueInput) {
    return await this.prisma.project.findUnique({
      where: project,
    });
  }

  async update(
    where: Prisma.ProjectWhereUniqueInput | any,
    data: Prisma.ProjectUpdateInput,
  ) {
    return await this.prisma.project.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.ProjectWhereUniqueInput | any) {
    return await this.prisma.project.delete({
      where,
    });
  }
}
