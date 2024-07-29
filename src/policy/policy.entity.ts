import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Policy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  policyNumber: string;

  @Column()
  provider: string;

  @Column()
  coverageDetails: string;
}
