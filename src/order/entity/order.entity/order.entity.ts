import { Column, Entity,
    PrimaryGeneratedColumn } from "typeorm";
@Entity() 
export class OrderEntity {
    @PrimaryGeneratedColumn()
    order_id:number;
    @Column({name:'name',nullable:false})
    name:string;
    @Column({name:'price',nullable:false})
    price:number;
    @Column({name:'price',nullable:false})
    total:number;
}