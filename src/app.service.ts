import { Injectable } from '@nestjs/common';
import * as v8 from 'v8';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('heap_stats', v8.getHeapStatistics());

    return 'Hello World!';
  }

  postHello(): string {
    console.log('heap_stats', v8.getHeapStatistics());

    return "What's on your mind?";
  }
}
