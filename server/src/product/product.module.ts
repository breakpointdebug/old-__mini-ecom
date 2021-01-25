import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SellerModule } from 'src/seller/seller.module';

import { Product, ProductSchema } from './product.model';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    forwardRef(() => SellerModule) /** fix circular dependency for Seller */
  ],
  providers: [ProductService, ProductResolver],
  exports: [ProductService]
})
export class ProductModule { }
