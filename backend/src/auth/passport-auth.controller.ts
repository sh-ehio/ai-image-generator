import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotImplementedException,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportLocalGuard } from './guards/passport-local.guard';

@Controller('auth-v2')
export class PassportAuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(PassportLocalGuard)
  @Post('login')
  login(@Request() request) {
    return this.authService.signIn(request.user);
  }

  @Get('me')
  getUserInfo() {
    throw new NotImplementedException();
  }
}
