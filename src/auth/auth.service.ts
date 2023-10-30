import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prismaService/prisma.service';
import { JudgeService } from 'src/judge/judge.service';
import { TeamService } from 'src/team/team.service';
import { SportsmanService } from 'src/sportsman/sportsman.service';
import { RegistrationUserDTO } from './dto/registration-user';
import { RegistrationSportsmanDTO } from './dto/registration-sportsman';
import { RegistrationJudgeDTO } from './dto/registration-judge';
import { RegistrationTeamDTO } from './dto/registration-team';
import { LoginUserDTO } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { Auth } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private judgeService: JudgeService,
    private teamService: TeamService,
    private sportsmanService: SportsmanService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginUserDTO) {
    const user = await this.validateUser(dto);
    return this.generateToken(user);
  }

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
    const password = await bcrypt.hash('1111', 5);
    const data = {
      role: dto.role,
      login: dto.userInfo.name,
      password: password,
    };
    const newUser = await this.prisma.auth.create({ data });
    return newUser;
  }

  private async generateToken(user: Auth) {
    const payload = { id: user.id, role: user.id };
    return { token: this.jwtService.sign(payload) };
  }

  private async validateUser(dto: LoginUserDTO): Promise<Auth> {
    const user = await this.prisma.auth.findUnique({
      where: {
        login: dto.login,
      },
    });

    const passwordEquals = await bcrypt.compare(dto.password, user.password);

    if (user && passwordEquals) {
      return user;
    }

    throw new UnauthorizedException({ message: 'Wrong login or password' });
  }
}
