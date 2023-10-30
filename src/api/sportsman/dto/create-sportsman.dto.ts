import { SEX } from '@prisma/client';

export class CreateSportsmanDTO {
  readonly name: string;
  readonly sex: SEX;
  readonly team: string;
}
