import { Role } from '@prisma/client';
import { CreateSportsmanDTO } from 'src/sportsman/dto/create-sportsman.dto';

export class RegistrationSportsmanDTO {
  readonly role: 'sportsman';
  readonly userInfo: CreateSportsmanDTO;
}
