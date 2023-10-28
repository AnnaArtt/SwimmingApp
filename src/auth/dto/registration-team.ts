import { Role } from '@prisma/client';
import { CreateTeamDTO } from 'src/team/dto/create-team.dto';

export class RegistrationTeamDTO {
  readonly role: 'team';
  readonly userInfo: CreateTeamDTO;
}
