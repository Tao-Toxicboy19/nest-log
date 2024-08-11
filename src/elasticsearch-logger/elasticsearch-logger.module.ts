// src/elasticsearch/elasticsearch.module.ts
import { Module } from '@nestjs/common';
import { ElasticsearchModule as NestElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    NestElasticsearchModule.register({
      node: 'http://localhost:9200', // URL ของ Elasticsearch
    }),
  ],
  exports: [NestElasticsearchModule],
})
export class ElasticsearchModule {}