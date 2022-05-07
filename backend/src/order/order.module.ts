import { Module } from '@nestjs/common';
import { OrderService } from './service/order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './order.entity';
import { ProductEntity } from '../product/product.entity';
import { CartEntity } from '../cart/cart.entity';
import { Users } from '../auth/user.entity';
import { CartService } from '../cart/service/cart.service';
import { ProductsService } from '../product/service/product/product.service';
import { OrderController } from './controller/order.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderEntity, ProductEntity, CartEntity, Users]),
  ],
  controllers: [OrderController],
  providers: [OrderService, CartService, ProductsService],
})
export class OrderModule {}
