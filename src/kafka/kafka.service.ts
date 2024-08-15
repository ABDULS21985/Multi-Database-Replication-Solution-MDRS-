import { Injectable, OnModuleInit } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { Kafka, Consumer } from 'kafkajs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  private consumer: Consumer;

  constructor(
    @Inject('KAFKA_CLIENT') private readonly kafka: Kafka,
    private prisma: PrismaService
  ) {}

  async onModuleInit() {
    this.consumer = this.kafka.consumer({ groupId: process.env.KAFKA_GROUP_ID });
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: 'your_topic', fromBeginning: true });

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const value = message.value.toString();
        console.log(`Received message: ${value}`);
        await this.prisma.replicatedData.create({
          data: { data: JSON.parse(value) },
        });
      },
    });
  }
}
