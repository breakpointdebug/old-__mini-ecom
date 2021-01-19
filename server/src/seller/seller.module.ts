import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from '../product/product.module';

import { Seller, SellerSchema } from './seller.model';
import { SellerService } from './seller.service';
import { SellerResolver } from './seller.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Seller.name, schema: SellerSchema }]),
    forwardRef(() => ProductModule)
  ],
  providers: [SellerService, SellerResolver],
  exports: [SellerService]
})
export class SellerModule { }
