import { Module } from '@nestjs/common';
import { BookService } from './book.service.js';
import { BookController } from './book.controller.js';

@Module({
  controllers: [BookController],
  providers: [BookService],
  exports: [BookService],
})
export class BookModule {}
