import { Sex } from '@prisma/client';

export class CreateSportsmanDTO {
  readonly name: string;
  readonly sex: Sex;
  readonly team: string;
}
