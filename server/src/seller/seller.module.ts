import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Seller, SellerSchema } from './seller.model';
import { SellerService } from './seller.service';
import { SellerResolver } from './seller.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Seller.name, schema: SellerSchema }])
  ],
  providers: [SellerService, SellerResolver]
})
export class SellerModule { }
