import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryResolver } from './inventory.resolver';
import { InventoryService } from './inventory.service';

@Module({
  // imports: [
  //   MongooseModule.forFeature({  })
  // ],
  providers: [InventoryResolver, InventoryService]
})
export class InventoryModule { }
