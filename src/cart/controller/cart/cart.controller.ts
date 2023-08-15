import { Controller } from '@nestjs/common';
import { Body,Delete,Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CartDto } from 'src/cart/dto/cart.dto/cart-dto/cart-dto';
import { CartEntity } from 'src/cart/entity/cart.entity/cart.entity';
import { CartService } from 'src/cart/services/cart/cart.service';
 
@Controller('cart')
export class CartController {
    constructor(private readonly CartService : CartService){}
    @Get()
    async getcart():Promise<any[]>{
        return this.CartService.GetAllcart();
    }
    @Get(':id')// get /order/123
    async findsomestore(@Param('id') id: number):Promise<any>{
        return this.CartService.findcart(id);
    }      

    @Post('/addnew')
    @HttpCode(HttpStatus.CREATED)
    async addnewstoreitem(@Body('store_id') store_id: any): Promise<any>{
       return await this.CartService.addcart(store_id);
    }
    @Delete()  // DELETE /order/123
    async deletecart(): Promise<any> {
        await this.CartService.Removecart();
        return { success: true };
    }    
}
