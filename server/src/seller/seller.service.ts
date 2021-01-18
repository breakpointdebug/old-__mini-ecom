import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import * as _ from './seller.inputs';
import { Seller, SellerDocument } from './seller.model';

@Injectable()
export class SellerService {
  constructor(@InjectModel(Seller.name) private sellerModel: Model<SellerDocument>) { }

  create(payload: _.CreateSellerInput) {
    const seller = new this.sellerModel(payload);
    return seller.save();
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
