import { IsNumber } from "class-validator";

export class CartDto {
    @IsNumber()
    id:number;
    @IsNumber()
    store_id:number;
}
