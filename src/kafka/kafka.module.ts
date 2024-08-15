import { Module } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Module({
  providers: [
    {
      provide: 'KAFKA_CLIENT',
      useFactory: () => {
        return new Kafka({
          clientId: process.env.KAFKA_CLIENT_ID,
          brokers: [process.env.KAFKA_BROKER],
        });
      },
    },
  ],
  exports: ['KAFKA_CLIENT'],
})
export class KafkaModule {}
