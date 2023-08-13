import { Column, Entity,
    PrimaryGeneratedColumn } from "typeorm";
@Entity() 
export class OrderEntity {
    @PrimaryGeneratedColumn()
    order_id:number;
    @Column({name:'store_id',nullable:false})
    store_id:number;
    @Column({name:'name',nullable:false})
    name:string;
    @Column({name:'address',nullable:false})
    address:string;
    @Column({name:'price',nullable:false})
    price:number;
    
}