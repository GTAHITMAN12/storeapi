import { OrderEntity } from 'src/order/entity/order.entity/order.entity';
import { OrderService } from 'src/order/services/order/order.service';
import { Body, Controller,Delete,Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { OrderDto } from 'src/order/dto/order.dto/order-dto/order-dto';
@Controller('order')
export class OrderController {
    constructor(private readonly orderService : OrderService){}

    @Get()
    async GetAllStoreS():Promise<any[]>{
        return this.orderService.GetAllOrders();
    }
    @Get(':id')// get /order/123
    async findsomestore(@Param('id') id: number):Promise<any>{
        return this.orderService.findOrder(id);
    }      

    @Post('/addorder')
    @HttpCode(HttpStatus.CREATED)
    async addnewstoreitem(@Body() store:OrderDto): Promise<any>{
        const Store = new OrderEntity();
        Store.name  = store.name;
        Store.price = store.price;
        Store.address= store.address ;
        Store.store_id= store.store_id;
        return await this.orderService.AddOrders(Store);
    }
    @Delete(':id')  // DELETE /order/123
    async deletestoreitem(@Param('id') id: number): Promise<any> {
        await this.orderService.RemoveOrders(id);
        return { success: true };
    }    
    @Put(':id') // put /order/123
    async updatestore(
        @Param('id') id: number,
        @Body() store:OrderDto
    ): Promise<OrderEntity>{
        const Store = await this.orderService.findOrder(id)
        Store.name  = store.name;
        Store.price = store.price;
        Store.address = store.address;
        Store.store_id = store.store_id;
        return await this.orderService.AddOrders(Store);
    }
}
