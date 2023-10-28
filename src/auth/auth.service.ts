import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prismaService/prisma.service';
import { JudgeService } from 'src/judge/judge.service';
import { TeamService } from 'src/team/team.service';
import { SportsmanService } from 'src/sportsman/sportsman.service';
import { RegistrationUserDTO } from './dto/registration-user';
import { RegistrationSportsmanDTO } from './dto/registration-sportsman';
import { RegistrationJudgeDTO } from './dto/registration-judge';
import { RegistrationTeamDTO } from './dto/registration-team';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private judgeService: JudgeService,
    private teamService: TeamService,
    private sportsmanService: SportsmanService,
  ) {}

  async registrationSportsman(dto: RegistrationSportsmanDTO) {
    const registration = await this.registration(dto);
    const newSportsman = await this.sportsmanService.createSportsman(
      dto.userInfo,
      registration.id,
    );
    return { newSportsman, registration };
  }

  async registrationJudge(dto: RegistrationJudgeDTO) {
    const registration = await this.registration(dto);
    const newJudge = await this.judgeService.createJudge(
      dto.userInfo,
      registration.id,
    );
    return { newJudge, registration };
  }

  async registrationTeam(dto: RegistrationTeamDTO) {
    const registration = await this.registration(dto);
    const newTeam = await this.teamService.createTeam(
      dto.userInfo,
      registration.id,
    );
    return { newTeam, registration };
  }

  private async registration(dto: RegistrationUserDTO) {
    const data = {
      role: dto.role,
      login: dto.userInfo.name,
    };
    const newUser = await this.prisma.auth.create({ data });
    return newUser;
  }
}
