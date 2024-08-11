import { Injectable, LoggerService } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class CustomLoggerService implements LoggerService {
  private readonly client: Client;

  constructor() {
    this.client = new Client({ node: 'http://localhost:9200' });
  }

  log(message: any, context?: string) {
    this.sendToElasticsearch('info', message, context);
  }

  error(message: any, trace?: string, context?: string) {
    this.sendToElasticsearch('error', message, context);
  }

  warn(message: any, context?: string) {
    this.sendToElasticsearch('warn', message, context);
  }

  debug(message: any, context?: string) {
    this.sendToElasticsearch('debug', message, context);
  }

  verbose(message: any, context?: string) {
    this.sendToElasticsearch('verbose', message, context);
  }

  private async sendToElasticsearch(
    level: string,
    message: any,
    context?: string,
  ) {
    try {
      console.log(
        `Sending log to Elasticsearch: level=${level}, message=${message}, context=${context}`,
      ); // ตรวจสอบการทำงานของ log
      await this.client.index({
        index: 'nestjs-logs',
        document: {
          level,
          message,
          context,
          timestamp: new Date().toISOString(),
        },
      });
    } catch (error) {
      console.error('Error sending log to Elasticsearch', error);
    }
  }
}
