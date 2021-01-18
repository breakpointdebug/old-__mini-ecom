import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.model';

import * as _ from './product.inputs';
import { BaseService } from '../_generic/base.service';

@Injectable()
export class ProductService extends BaseService<ProductDocument> {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {
    super(productModel);
  }
}
