import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  service: MessagesService;

  constructor() {
    this.service = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.service.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.service.create(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
