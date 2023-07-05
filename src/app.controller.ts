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

  @Get(':id')
  findOne(@Param('id') id) {
    console.log('controler id ===', id);
    return this.appService.getUser(Number(id));
  }
}
