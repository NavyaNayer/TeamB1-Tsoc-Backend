import { Injectable, OnModuleDestroy, BeforeApplicationShutdown } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleDestroy, BeforeApplicationShutdown {
  constructor() {
    super();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async beforeApplicationShutdown(signal: string) {
    await this.$disconnect();
  }
}
