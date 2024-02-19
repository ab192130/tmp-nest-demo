import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res): string {
    return res.status(HttpStatus.OK).send(this.appService.getHello());
  }

  @Post()
  postHello(@Res() res): string {
    return res.status(HttpStatus.OK).send(this.appService.postHello());
  }
}
