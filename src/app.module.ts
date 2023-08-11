import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order/entity/order.entity/order.entity';
import { StoreEntity } from './store/entity/store.entity/store.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      host: "localhost",
      port: 27017,
      database: "test",
      entities: [OrderEntity,StoreEntity]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
