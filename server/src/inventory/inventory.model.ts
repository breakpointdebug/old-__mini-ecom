import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Document, Types } from 'mongoose';

import { BaseModel } from '../_generic/base.model';
import { Product } from "../product/product.model";

@InputType("InventoryInput")
@ObjectType("InventoryType")
@Schema()
export class Inventory {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String)
  @Prop({ type: Types.ObjectId, ref: Product.name })
  productId: Types.ObjectId;

  @Field(() => Number, { defaultValue: 0 })
  @Prop({ default: 0 })
  stockCount: number;
}

export type InventoryDocument = Inventory & Document;

export const InventorySchema = SchemaFactory.createForClass(Inventory);