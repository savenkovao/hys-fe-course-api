import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<h1>HYS FE API - v=2.4</h1>`;
  }
}
