import { Column, Entity,
    PrimaryGeneratedColumn } from "typeorm";
@Entity() 
export class StoreEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({name:'name',nullable:false})
    name:string;
    @Column({name:'price',nullable:false})
    price:number;
    @Column({name:'price',nullable:false})
    target_sale:number;
    @Column({name:'description',nullable:false})
    description:string;
    @Column({name:'stock',nullable:false})
    stock:number;
}