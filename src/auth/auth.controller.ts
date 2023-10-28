import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationJudgeDTO } from './dto/registration-judge';
import { RegistrationSportsmanDTO } from './dto/registration-sportsman';
import { RegistrationTeamDTO } from './dto/registration-team';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/createSportsman')
  createSportsman(@Body() dto: RegistrationSportsmanDTO) {
    return this.authService.registrationSportsman(dto);
  }

  @Post('/createTeam')
  createTeam(@Body() dto: RegistrationTeamDTO) {
    return this.authService.registrationTeam(dto);
  }

  @Post('/createJudge')
  createJudge(@Body() dto: RegistrationJudgeDTO) {
    return this.authService.registrationJudge(dto);
  }
}
