import { Module } from '@nestjs/common';
import { CartController } from './controller/cart/cart.controller';
import { CartService } from './services/cart/cart.service';
import { CartEntity } from './entity/cart.entity/cart.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([CartEntity])],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
