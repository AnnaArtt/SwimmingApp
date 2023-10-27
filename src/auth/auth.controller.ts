import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegistrationUserDTO } from './dto/registration-user';

interface CreateSportsmanRequest {
  role: RegistrationUserDTO;
  // add different types
  newUserInformation: Object;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  create(@Body() body: CreateSportsmanRequest) {
    return this.authService.registration(body.role, body.newUserInformation);
  }
}
