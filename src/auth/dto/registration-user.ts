import { Role } from '@prisma/client';
import { CreateJudgeDTO } from 'src/judge/dto/create-judge.dto';
import { CreateSportsmanDTO } from 'src/sportsman/dto/create-sportsman.dto';
import { CreateTeamDTO } from 'src/team/dto/create-team.dto';

export class RegistrationUserDTO {
  readonly role: Role;
  readonly userInfo: CreateJudgeDTO | CreateSportsmanDTO | CreateTeamDTO;
}
