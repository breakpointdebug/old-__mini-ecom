import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Seller, SellerDocument } from './seller.model';

import * as _ from './seller.inputs';

@Injectable()
export class SellerService {
  constructor(@InjectModel(Seller.name) private sellerModel: Model<SellerDocument>) { }

  create(payload: _.CreateSellerInput) {
    return (new this.sellerModel(payload)).save();
  }

  update(payload: _.UpdateSellerInput) {
    return this.sellerModel.findByIdAndUpdate(payload._id, payload, { new: true }).exec();
  }

  list(filters: _.ListSellerInput) {
    return this.sellerModel.find({ ...filters }).exec();
  }

  getById(_id: Types.ObjectId) {
    return this.sellerModel.findById(_id).exec();
  }

  // delete should trigger a boolean flag
}
