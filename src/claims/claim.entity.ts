import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Policy } from '../policy/policy.entity';

@Entity()
export class Claim {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  claimDetails: string;

  @Column()
  status: string;

  @ManyToOne(() => Policy, policy => policy.id)
  policy: Policy;

  @Column({ type: 'json', nullable: true })
  digitalBills?: any;  // You can adjust this type based on your needs
}
