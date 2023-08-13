import { IsNumber, IsString } from "class-validator";

export class OrderDto {
    @IsNumber()
    order_id:number;
    @IsNumber()
    store_id:number;
    @IsString()
    name:string;
    @IsString()
    address:string;
    @IsNumber()
    price:number;

}
