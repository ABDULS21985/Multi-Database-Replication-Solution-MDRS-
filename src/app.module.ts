import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { KafkaModule } from './kafka/kafka.module';
import { KafkaConsumerService } from './kafka/kafka.service';
import { PrismaService } from './prisma/prisma.service';



@Module({
  imports: [PrismaModule, KafkaModule,],
  controllers: [AppController],
  providers: [AppService, KafkaConsumerService, PrismaService],
})
export class AppModule {}

