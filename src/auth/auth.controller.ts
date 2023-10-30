import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationJudgeDTO } from './dto/registration-judge';
import { RegistrationSportsmanDTO } from './dto/registration-sportsman';
import { RegistrationTeamDTO } from './dto/registration-team';
import { LoginUserDTO } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('')
  createS() {
    return 'hello';
  }

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

  @Post('/login')
  login(@Body() dto: LoginUserDTO) {
    return this.authService.login(dto);
  }
}
