import { Injectable } from '@nestjs/common';
import { Document, Model, Types } from 'mongoose';

@Injectable()
export abstract class BaseService<M extends Document> {
  constructor(private readonly model: Model<M>) { }

  create<DTO>(payload: DTO, extraOption?: any) {
    return (new this.model({ ...payload, ...extraOption })).save();
  }

  getById(_id: Types.ObjectId) {
    return this.model.findById(_id).exec();
  }

  // extraOption: if you want to include a specific column condition
  list<DTO>(filters: DTO, extraOption?: any) {
    return this.model.find({ ...filters, ...extraOption }).exec();
  }

  update<DTO>(_id: Types.ObjectId, payload: DTO) {
    return this.model.findByIdAndUpdate(_id, payload, { new: true }).exec();
  }

  deleteByLogic<DTO>(_id: Types.ObjectId, payload: DTO) {
    return this.model.findByIdAndUpdate(_id, { ...payload, deletedAt: new Date() }, { new: true }).exec();
  }
}