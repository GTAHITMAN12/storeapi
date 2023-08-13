import { Module } from '@nestjs/common';
import { StoreEntity } from './entity/store.entity/store.entity';
import { StoreController } from './controller/store/store.controller';
import { StoreService } from './service/store/store.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([StoreEntity])],
    controllers: [StoreController],
    providers: [StoreService],
})
export class StoreModule {}
