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
        return  this.SRepository.query('Select * From `CartEntity`');
    }
    async addcartbyid(Cart : CartEntity,id :number):Promise<CartEntity>{
        return await this.SRepository.query('INSERT INTO CartEntity(id,store_id) VALUES (?, ?)',[id,Cart.store_id]);
    }
    async addcart(Cart : CartEntity):Promise<CartEntity>{
        return await this.SRepository.query('INSERT INTO CartEntity(store_id) VALUES (?)',[Cart.store_id]);
    }
    async Removecart( ):Promise<any>{
        return await this.SRepository.query('TRUNCATE TABLE CartEntity  ' );
    }
    findcart(id : number):Promise<any>{
        return this.SRepository.query('Select * From CartEntity WHERE CartEntity.id=?',[id]);
    }
}
