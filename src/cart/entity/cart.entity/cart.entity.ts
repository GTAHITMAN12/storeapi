import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CartEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({name:'store_id',nullable:false})
    store_id:number;
     
}
