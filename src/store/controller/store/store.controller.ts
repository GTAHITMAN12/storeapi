import { Body, Controller,Delete,Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { StoreDto } from 'src/store/dto/store.dto/store-dto/store-dto';
import { StoreEntity } from 'src/store/entity/store.entity/store.entity';
import { StoreService } from 'src/store/service/store/store.service';

@Controller('store')
export class StoreController {
    constructor(private readonly storeService : StoreService){}

    @Get()
    async GetAllStoreS():Promise<any[]>{
        return this.storeService.GetAllStoreS();
    }
    @Get(':id')// get /store/123
    async findsomestore(@Param('id') id: number):Promise<any>{
        return this.storeService.findStore(id);
    }      

    @Post('/additem')
    @HttpCode(HttpStatus.CREATED)
    async addnewstoreitem(@Body() store:StoreDto): Promise<any>{
        const Store = new StoreEntity();
        Store.name  = store.name;
        Store.price = store.price;
        Store.target_sale = store.target_sale;
        Store.description = store.description;
        Store.stock = store.stock;
        return await this.storeService.AddStoreS(Store);
    }
    @Delete(':id')  // DELETE /store/123
    async deletestoreitem(@Param('id') id: number): Promise<any> {
        await this.storeService.RemoveStoreS(id);
        return { success: true };
    }    
    @Put(':id') // put /store/123
    async updatestore(
        @Param('id') id: number,
        @Body() store:StoreDto
    ): Promise<StoreEntity>{
        const Store = await this.storeService.findStore(id)
        Store.name  = store.name;
        Store.price = store.price;
        Store.target_sale = store.target_sale;
        Store.description = store.description;
        Store.stock = store.stock;
        return await this.storeService.AddStoreS(Store);
    }

}
