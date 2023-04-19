import { Controller, Get } from '@midwayjs/core';
import { MainService } from '../service/main.service';
@Controller('/')
export class HomeController {
  @Get('/')
  async home(): Promise<string> {
    const chat = new MainService();
    chat.run();
    return 'Hello Midwayjs!';
  }
}
