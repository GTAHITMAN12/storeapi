import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order/entity/order.entity/order.entity';
import { StoreEntity } from './store/entity/store.entity/store.entity';
import { StoreService } from './store/service/store/store.service';
import { StoreController } from './store/controller/store/store.controller';
import { OrderController } from './order/controller/order/order.controller';
import { StoreModule } from './store/store.module';
import { OrderModule } from './order/order.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/DB/test.db',
      logging: true,
      entities: [OrderEntity,StoreEntity]
    }),
    StoreModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
