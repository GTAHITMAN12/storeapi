import { IsNumber, IsString } from "class-validator";

export class OrderDto {
    @IsNumber()
    order_id:number;
    @IsString()
    name:string;
    @IsNumber()
    price:number;
    @IsNumber()
    total:number;
}
