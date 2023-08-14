import { Controller } from '@nestjs/common';
import { Body,Delete,Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CartDto } from 'src/cart/dto/cart.dto/cart-dto/cart-dto';
import { CartEntity } from 'src/cart/entity/cart.entity/cart.entity';
@Controller('cart')
export class CartController {
    CartService: any;
    @Get()
    async GetAllcart():Promise<any[]>{
        return this.CartService.GetAllcart();
    }
    @Get(':id')// get /order/123
    async findsomestore(@Param('id') id: number):Promise<any>{
        return this.CartService.findcart(id);
    }      

    @Post('/addcart')
    @HttpCode(HttpStatus.CREATED)
    async addnewstoreitem(@Body() cart:CartDto): Promise<any>{
        const Cart = new CartEntity();
        Cart.store_id= cart.store_id;
        return await this.CartService.addcart(Cart);
    }
    @Delete(':id')  // DELETE /order/123
    async deletecart(@Param('id') id: number): Promise<any> {
        await this.CartService.Removecart(id);
        return { success: true };
    }    
}
