import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    //
  }

  @Get()
  findOne(@Body() bodyObj) {
    console.log('controler ===', bodyObj.email);
    return this.appService.getUser(bodyObj.email);
  }
}
