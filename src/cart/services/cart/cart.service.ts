import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from 'src/cart/entity/cart.entity/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
    constructor(
        // eslint-disable-next-line prettier/prettier
        @InjectRepository(CartEntity)
        private SRepository:Repository<CartEntity>, 
    ){}
    GetAllcart():Promise<CartEntity[]>{
        return  this.SRepository.query(`SELECT CartEntity.id,StoreEntity.name,StoreEntity.price ,COUNT(StoreEntity.id) as count
        FROM  StoreEntity,CartEntity
        WHERE StoreEntity.id=CartEntity.store_id
        GROUP BY StoreEntity.id`);
    }
    async addcart(id:number):Promise<any>{
        return await this.SRepository.query('INSERT INTO CartEntity(store_id) VALUES (?)',[id]);
    }
    async Removecart( ):Promise<any>{
         this.SRepository.query('DELETE FROM CartEntity' );
         return await this.SRepository.query('ALTER TABLE CartEntity AUTO_INCREMENT = 1;' );
    }
    findcart(id : number):Promise<any>{
        return this.SRepository.query('Select * From CartEntity WHERE CartEntity.id=?',[id]);
    }
}
