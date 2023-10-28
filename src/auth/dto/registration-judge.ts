import { Role } from '@prisma/client';
import { CreateJudgeDTO } from 'src/judge/dto/create-judge.dto';

export class RegistrationJudgeDTO {
  readonly role: 'judge';
  readonly userInfo: CreateJudgeDTO;
}
