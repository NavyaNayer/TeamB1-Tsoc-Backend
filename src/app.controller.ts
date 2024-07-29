import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiQuery, ApiResponse } from '@nestjs/swagger';

@ApiTags('App') // Tag for grouping in Swagger
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Returns a hello message.' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/data')
  @ApiQuery({ name: 'filter', required: false, description: 'Filter data based on query parameter' })
  @ApiResponse({ status: 200, description: 'Returns backend data.' })
  getData(@Query('filter') filter?: string): string {
    return `Hello from backend with filter: ${filter || 'none'}`;
  }
}
