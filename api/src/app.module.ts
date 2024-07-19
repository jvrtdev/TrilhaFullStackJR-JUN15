import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';
import { ProjectModule } from './modules/project/project.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule, ProjectModule, AuthModule],
  controllers: [],
  providers: [AuthService],
})
export class AppModule {}
