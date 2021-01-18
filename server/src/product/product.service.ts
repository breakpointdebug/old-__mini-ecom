import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import * as _ from './product.inputs';
import { Product, ProductDocument } from './product.model';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

  create(payload: _.CreateProductInput) {
    const product = new this.productModel(payload);
    return product.save();
  }

  update(payload: _.UpdateProductInput) {
    return this.productModel
      .findByIdAndUpdate(
        payload._id, payload, { new: true })
      .exec();
  }

  list(filters: _.ListProductInput) {
    return this.productModel
      .find({ ...filters, deletedAt: null })
      .exec();
  }

  getById(_id: Types.ObjectId) {
    return this.productModel.findById(_id).exec();
  }

  delete(payload: _.DeleteProductInput) {
    return this.productModel
      .findByIdAndUpdate(
        payload._id, { ...payload, deletedAt: new Date() }, { new: true })
      .exec();
  }
}
