import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seller, SellerDocument } from './seller.model';
import { BaseService } from '../_generic/base.service';
import { ProductService } from 'src/product/product.service';
import * as _ from './seller.inputs';

@Injectable()
export class SellerService extends BaseService<SellerDocument> {
  constructor(
    @InjectModel(Seller.name) private readonly sellerModel: Model<SellerDocument>,
    private readonly productService: ProductService) {
    super(sellerModel);
  }

  // function will be used by ProductResolver
  associateProductToInv({ _id, productId, stockCount }: _.AssociateProductToInvInput) {
    if (!this.productService.getById(productId)) {
      throw new NotFoundException("productId not found");
    }
    // 2. does productId already eixsting on inventories column?



    // if product already exists on inventories, do not proceed, instead,
    // just update the value according to stockCount passed on argument

    // this.sellerModel.findByIdAndUpdate(payload._id, )
    return null;
  }

  updateProductInv(payload: _.UpdateStockInvInput) {
    return null;
  }
}
