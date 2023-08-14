/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/order/entity/order.entity/order.entity';
@Injectable()
export class OrderService {
    constructor(
        // eslint-disable-next-line prettier/prettier
        @InjectRepository(OrderEntity)
        private SRepository:Repository<OrderEntity>, 
    ){}
    GetAllOrders():Promise<OrderEntity[]>{
        return  this.SRepository.query('Select * From `OrderEntity`');
    }
    async AddStorebyid(order : OrderEntity,id :number):Promise<OrderEntity>{
        return await this.SRepository.query('INSERT INTO OrderEntity(id,name,address,price,store_id) VALUES (?, ?, ?, ?, ?, ?)',[id,order.name,order.address,order.price,order.store_id]);
    }
    async AddOrders(order : OrderEntity):Promise<OrderEntity>{
        return await this.SRepository.query('INSERT INTO OrderEntity(name,address,price,store_id) VALUES (?, ?, ?, ?)',[order.name,order.address,order.price,order.store_id]);
    }
    async RemoveOrders(id : number):Promise<any>{
        return await this.SRepository.query('DELETE FROM OrderEntity WHERE OrderEntity.Order_id=?',[id]);
    }
    findOrder(id : number):Promise<any>{
        return this.SRepository.query('Select * From OrderEntity WHERE OrderEntity.Order_id=?',[id]);
    }
}
