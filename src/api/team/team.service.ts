import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prismaService/prisma.service';
import { CreateTeamDTO } from './dto/create-team.dto';
import { Team } from '@prisma/client';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}

  async createTeam(dto: CreateTeamDTO, id: number): Promise<Team> {
    const data = {
      ...dto,
      user: {
        connect: {
          id: id,
        },
      },
    };
    const newTeam = await this.prisma.team.create({ data });
    return newTeam;
  }

  // async getIdByName(name: string) {
  //   const team = await this.prisma.team.findUnique({ where: { name: name } });
  //   return team.idTeam;
  // }
}
