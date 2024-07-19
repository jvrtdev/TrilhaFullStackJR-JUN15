import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, 
    private readonly userService: UserService
  ) {}

  private createToken(id: number, email: string, password: string) {
    return this.jwtService.sign({ id, email, password });
  }

  async checkToken(token: string) {
    try {
      return this.jwtService.verify(token.replace("Bearer ", ""))
    } catch (err) {
      return false;
    }
  }
  async signIn(email: string, pass: string){
    const user = await this.userService.findOne({email: email})
    const isMatch: boolean = await bcrypt.compare(pass, user?.password)

    if(!isMatch){
      throw new UnauthorizedException();
    }
    const token = this.createToken(user.id, user.email, user.password)

    return JSON.stringify({
      "message":"login success!",
      "token": token
    })
  }
}
