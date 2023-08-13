import { Injectable } from '@nestjs/common';
import { Entity, MssqlParameter, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StoreEntity } from 'src/store/entity/store.entity/store.entity';
@Injectable()
export class StoreService {
    constructor(
        // eslint-disable-next-line prettier/prettier
        @InjectRepository(StoreEntity)
        private SRepository:Repository<StoreEntity>, 
    ){}
    GetAllStoreS():Promise<StoreEntity[]>{
        return  this.SRepository.query('Select * From `StoreEntity`');
    }
    async AddStoreS(store : StoreEntity):Promise<StoreEntity>{
        return await this.SRepository.query('INSERT INTO StoreEntity(name, price, target_sale, description, stock) VALUES (?, ?, ?, ?, ?)',[store.name,store.price,store.target_sale,store.description,store.stock]);
    }
    async RemoveStoreS(id : number):Promise<any>{
        return await this.SRepository.query('DELETE FROM StoreEntity WHERE StoreEntity.id=?',[id]);
    }
    findStore(id : number):Promise<any>{
        return this.SRepository.query('Select * From `StoreEntity`WHERE StoreEntity.id=?',[id]);
    }
}
