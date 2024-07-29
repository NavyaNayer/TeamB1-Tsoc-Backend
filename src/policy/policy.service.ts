import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Policy } from './policy.entity';

@Injectable()
export class PolicyService {
  constructor(
    @InjectRepository(Policy)
    private readonly policyRepository: Repository<Policy>,
  ) {}

  async findAll(): Promise<Policy[]> {
    return this.policyRepository.find();
  }

  async findOne(id: number): Promise<Policy> {
    return this.policyRepository.findOneBy({ id });
  }

  async create(policy: Policy): Promise<Policy> {
    return this.policyRepository.save(policy);
  }

  async update(id: number, policy: Partial<Policy>): Promise<Policy> {
    await this.policyRepository.update(id, policy);
    return this.policyRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.policyRepository.delete(id);
  }
}
