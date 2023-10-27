import { Injectable } from '@nestjs/common';
import { RegistrationUserDTO } from 'src/auth/dto/registration-user';
import { PrismaService } from 'src/prismaService/prisma.service';
import { CreateJudgeDTO } from './dto/create-judge.dto';
import { Judges, Prisma } from '@prisma/client';

@Injectable()
export class JudgeService {
  constructor(private prisma: PrismaService) {}

  async createJudge(dto: CreateJudgeDTO, id: number): Promise<Judges> {
    const data = {
      ...dto,
      auth: {
        connect: {
          id: id,
        },
      },
    };
    const newJudge = await this.prisma.judges.create({ data });
    return newJudge;
  }
}
