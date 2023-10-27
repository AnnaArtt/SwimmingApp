import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SportsmanController } from './sportsman/sportsman.controller';
import { SportsmanService } from './sportsman/sportsman.service';
import { SportsmanModule } from './sportsman/sportsman.module';
import { TeamController } from './team/team.controller';
import { TeamService } from './team/team.service';
import { TeamModule } from './team/team.module';
import { JudgeController } from './judge/judge.controller';
import { JudgeService } from './judge/judge.service';
import { JudgeModule } from './judge/judge.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prismaService/prisma.service';

@Module({
  imports: [SportsmanModule, TeamModule, JudgeModule, AuthModule],
  controllers: [
    AppController,
    SportsmanController,
    TeamController,
    JudgeController,
    AuthController,
  ],
  providers: [
    AppService,
    SportsmanService,
    TeamService,
    JudgeService,
    AuthService,
    PrismaService,
  ],
})
export class AppModule {}
