import {
  Body,
  Controller,
  Get,
  Request,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuardCus } from './guards/auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() input: { username: string; password: string }) {
    return this.authService.authenticate(input);
  }

  @UseGuards(AuthGuardCus)
  @Get('me')
  getUserInfo(@Request() request) {
    return request.user;
  }

  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubAuth() {
    // initiates the github oauth login flow
  }

  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  async githubAuthCallback(@Req() req, @Res() res: Response) {
    const user = req.user;

    let db_user = await this.usersService.user(req.user);

    if (!db_user) {
      db_user = await this.usersService.createUser(req.user);
    }

    const payload = { id: user.id, name: user.name, email: user.email };
    const token = this.jwtService.sign(payload);

    res.cookie('access_token', token, { httpOnly: true });

    res.redirect('http://localhost:3001');
  }
}
