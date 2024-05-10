import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from NestJS, A progressive Node.js framework for building efficient, reliable and scalable server-side applications!';
  }
}
