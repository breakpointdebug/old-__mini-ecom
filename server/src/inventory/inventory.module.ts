import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Inventory, InventorySchema } from './inventory.model';
import { InventoryService } from './inventory.service';
import { InventoryResolver } from './inventory.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Inventory.name, schema: InventorySchema }])
  ],
  providers: [InventoryResolver, InventoryService]
})
export class InventoryModule { }
