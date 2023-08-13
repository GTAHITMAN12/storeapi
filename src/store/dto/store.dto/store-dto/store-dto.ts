import { IsNumber, IsString } from "class-validator";

export class StoreDto {
    @IsNumber()
    id:number;
    @IsString()
    name:string;
    @IsNumber()
    price:number;
    @IsNumber()
    target_sale:number;
    @IsString()
    description:string;
    @IsNumber()
    stock:number;
}
