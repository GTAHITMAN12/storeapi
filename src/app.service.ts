import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    private manage:EntityManager
    ){};
  getHello(): string {
    return 'Hello World!';
  }
  async getsaledetail()  :Promise<any>{
    return await this.manage.query(`
      SELECT OrderEntity.store_id,StoreEntity.name,OrderEntity.price,OrderEntity.price*COUNT(OrderEntity.store_id) as actural_sale,StoreEntity.target_sale,COUNT(OrderEntity.store_id) as sale_count
      FROM  StoreEntity,OrderEntity
      WHERE StoreEntity.id=OrderEntity.store_id
      GROUP BY StoreEntity.id`)
  }
}
