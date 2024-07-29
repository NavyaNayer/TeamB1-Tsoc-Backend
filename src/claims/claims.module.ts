import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClaimService } from './claim.service';
import { ClaimController } from './claim.controller';
import { Claim } from './claim.entity'; // Ensure Claim entity is imported
import { Policy } from '../policy/policy.entity'; // Import Policy entity if needed

@Module({
  imports: [TypeOrmModule.forFeature([Claim, Policy])], // Register Claim and Policy entities
  providers: [ClaimService],
  controllers: [ClaimController],
  exports: [ClaimService], // Export ClaimsService if needed in other modules
})
export class ClaimsModule {}

