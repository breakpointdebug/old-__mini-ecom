import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inventory, InventoryDocument } from './inventory.model';

import { BaseService } from '../_generic/base.service';

@Injectable()
export class InventoryService extends BaseService<InventoryDocument> {
  constructor(@InjectModel(Inventory.name) private inventoryModel: Model<InventoryDocument>) {
    super(inventoryModel);
  }


  // "TODO: linking of inventory (productId, stockCount) from seller without using an extra collection"

  // save routine
  // if productId already exists, then update the count, else insert
}
