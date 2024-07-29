import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Claim } from './claim.entity';

@Injectable()
export class ClaimService {
  constructor(
    @InjectRepository(Claim)
    private readonly claimRepository: Repository<Claim>,
  ) {}

  async findAll(): Promise<Claim[]> {
    return this.claimRepository.find();
  }

  async findOne(id: number): Promise<Claim> {
    return this.claimRepository.findOneBy({ id });
  }

  async create(claim: Claim): Promise<Claim> {
    return this.claimRepository.save(claim);
  }

  async update(id: number, claim: Partial<Claim>): Promise<Claim> {
    await this.claimRepository.update(id, claim);
    return this.claimRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.claimRepository.delete(id);
  }
}
