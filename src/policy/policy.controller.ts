import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PolicyService } from './policy.service';
import { Policy } from './policy.entity';

@Controller('policies')
export class PolicyController {
  constructor(private readonly policyService: PolicyService) {}

  @Get()
  async findAll(): Promise<Policy[]> {
    return this.policyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Policy> {
    return this.policyService.findOne(id);
  }

  @Post()
  async create(@Body() policy: Policy): Promise<Policy> {
    return this.policyService.create(policy);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() policy: Partial<Policy>): Promise<Policy> {
    return this.policyService.update(id, policy);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.policyService.remove(id);
  }
}
