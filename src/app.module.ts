import { Module, Logger } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { CustomLoggerService } from './elasticsearch-logger/elasticsearch-logger.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200', // URL ของ Elasticsearch Server
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: Logger,
      useClass: CustomLoggerService,
    },
  ],
})
export class AppModule {}
