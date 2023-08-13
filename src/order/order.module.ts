import { Module } from '@nestjs/common';
import { OrderEntity } from './entity/order.entity/order.entity';
import { OrderController } from './controller/order/order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([OrderEntity])],
    controllers: [OrderController],
    providers: [],
})
export class OrderModule {}
