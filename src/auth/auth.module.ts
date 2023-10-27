import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prismaService/prisma.service';
import { JudgeService } from 'src/judge/judge.service';
import { TeamService } from 'src/team/team.service';
import { SportsmanService } from 'src/sportsman/sportsman.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    JudgeService,
    TeamService,
    SportsmanService,
  ],
})
export class AuthModule {}
