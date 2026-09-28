import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';
import { Book } from './entities/book.entity.js';

@Injectable()
export class BookService {
  private books:Book[]=[{id:1,title:"test",price:350,createdAt: new Date(),updatedAt: null}];
  create(createBookDto: CreateBookDto) {
    if(!createBookDto){
      throw new BadRequestException("Verifier Votre data");
    }
    const lastBook = this.books[this.books.length - 1];
    const nextId = lastBook ? lastBook.id ++ : 1;
    const newBook: Book = {
      id: nextId,
      title: createBookDto.title,
      price: createBookDto.price,
      createdAt: new Date(),
      updatedAt: null,
    };
    this.books.push(newBook);
    return {
      message: 'Book created successfully',
      data: this.books,
    };
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    const book = this.books.find(book => book.id === id);

    return book ? book : new BadRequestException("Verifier Votre data");
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
