import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Document, Types } from 'mongoose';

import { BaseModel } from '../_generic/base.model';

@InputType("InventoryInput")
@ObjectType("InventoryType")
@Schema({ collection: "inventories", timestamps: true })
export class Inventory extends BaseModel {

  @Field(() => String)
  @Prop()
  productId: Types.ObjectId;

  @Field(() => Number)
  @Prop()
  stockCount: number;


}

export type InventoryDocument = Inventory & Document;

export const InventorySchema = SchemaFactory.createForClass(Inventory);