import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prismaService/prisma.service';
import { JudgeService } from 'src/judge/judge.service';
import { RegistrationUserDTO } from './dto/registration-user';
import { TeamService } from 'src/team/team.service';
import { SportsmanService } from 'src/sportsman/sportsman.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private judgeService: JudgeService,
    private teamService: TeamService,
    private sportsmanService: SportsmanService,
  ) {}

  async registration(dto: RegistrationUserDTO, newUserInfo) {
    const data = {
      ...dto,
      login: newUserInfo.name,
    };
    const newUser = await this.prisma.auth.create({ data });
    let newJudge = null;

    if (newUser.role === 'judge') {
      newJudge = await this.judgeService.createJudge(newUserInfo, newUser.id);
    } else if (newUser.role === 'sportsman') {
      newJudge = await this.sportsmanService.createSportsman(
        newUserInfo,
        newUser.id,
      );
    } else if (newUser.role === 'team') {
      newJudge = await this.teamService.createTeam(newUserInfo, newUser.id);
    }

    return { newJudge, newUser };
  }
}
