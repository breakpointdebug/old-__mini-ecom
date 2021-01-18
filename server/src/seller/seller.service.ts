import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seller, SellerDocument } from './seller.model';

import * as _ from './seller.inputs';
import { BaseService } from '../_generic/base.service';

@Injectable()
export class SellerService extends BaseService<SellerDocument> {
  constructor(@InjectModel(Seller.name) private sellerModel: Model<SellerDocument>) {
    super(sellerModel);
  }
}
