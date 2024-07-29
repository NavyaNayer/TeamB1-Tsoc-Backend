import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClaimService } from './claim.service';
import { Claim } from './claim.entity';

@Controller('claims')
export class ClaimController {
  constructor(private readonly claimService: ClaimService) {}

  @Get()
  async findAll(): Promise<Claim[]> {
    return this.claimService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Claim> {
    return this.claimService.findOne(id);
  }

  @Post()
  async create(@Body() claim: Claim): Promise<Claim> {
    return this.claimService.create(claim);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() claim: Partial<Claim>): Promise<Claim> {
    return this.claimService.update(id, claim);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.claimService.remove(id);
  }
}
