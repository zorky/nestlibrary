import { Module } from '@nestjs/common';
import { CartService } from './service/cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './cart.entity';
import { ProductEntity } from '../product/product.entity';
import { Users } from '../auth/user.entity';
import { ProductsService } from '../product/service/product/product.service';
import { CartController } from './controller/cart.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, ProductEntity, Users])],
  providers: [CartService, ProductsService],
  controllers: [CartController],
})
export class CartModule {}
