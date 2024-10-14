import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-github2';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GitHubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(
    private readonly authService: AuthService,
    private configService: ConfigService,
  ) {
    const clientID = configService.get<string>('GH_CLIENT_ID');
    const clientSecret = configService.get<string>('GH_CLIENT_SECRET');
    super({
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: 'http://localhost:3000/auth/github/callback',
      scope: ['user:email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user: any) => void,
  ): Promise<any> {
    try {
      const user = await this.authService.validateOAuthLogin(profile, 'github');
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
}
