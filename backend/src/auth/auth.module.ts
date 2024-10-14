import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PassportAuthController } from './passport-auth.controller';
import { LocalStrategy } from './strategies/local.strategy';
import { GitHubStrategy } from './strategies/github.strategy';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  providers: [AuthService, LocalStrategy, GitHubStrategy, JwtStrategy],
  controllers: [AuthController, PassportAuthController],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    PassportModule,
    ConfigModule,
  ],
})
export class AuthModule {}
