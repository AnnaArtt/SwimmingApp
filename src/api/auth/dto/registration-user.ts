import { ROLE } from '@prisma/client';
import { CreateJudgeDTO } from 'src/api/judge/dto/create-judge.dto';
import { CreateSportsmanDTO } from 'src/api/sportsman/dto/create-sportsman.dto';
import { CreateTeamDTO } from 'src/api/team/dto/create-team.dto';

export class RegistrationUserDTO {
  readonly role: ROLE;
  readonly userInfo: CreateJudgeDTO | CreateSportsmanDTO | CreateTeamDTO;
}
