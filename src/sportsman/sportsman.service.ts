import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaService/prisma.service';
import { CreateSportsmanDTO } from './dto/create-sportsman.dto';
import { Prisma, Sportsman } from '@prisma/client';

@Injectable()
export class SportsmanService {
  constructor(private prisma: PrismaService) {}

  async createSportsman(
    dto: CreateSportsmanDTO,
    id: number,
  ): Promise<Sportsman> {
    const teamId = 12;
    const data = {
      name: dto.name,
      sex: dto.sex,
      auth: {
        connect: {
          id: id,
        },
      },
      team: {
        connect: {
          name: dto.team,
        },
      },
    };
    const newSportsman = await this.prisma.sportsman.create({ data });
    return newSportsman;
  }
}
