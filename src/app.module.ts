import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module'; // Ensure this path is correct
import { PolicyModule } from './policy/policy.module';
import { ClaimsModule } from './claims/claims.module';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';


import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true, // Set to false in production
    }),
    AuthModule, // Ensure this is correctly imported
    PolicyModule,
    ClaimsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
