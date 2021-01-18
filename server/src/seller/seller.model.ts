import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Product } from "src/product/product.model";
import { Inventory } from "../inventory/inventory.model";

import { BaseModel } from '../_generic/base.model';
// export class Inventory {
//   productId: string;
//   currentStock: number;
// }

@InputType("SellerInput")
@ObjectType("SellerType")
@Schema({ collection: "sellers", timestamps: true })
export class Seller extends BaseModel {

  @Field(() => String, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  accountId?: Types.ObjectId; //todo: link

  @Field(() => String, { nullable: false })
  @Prop({ unique: true })
  businessName: string;

  @Field(() => [Inventory], { nullable: true, defaultValue: null })
  @Prop({ default: null, type: [Inventory] })
  inventories?: [Inventory]
}



export type SellerDocument = Seller & Document;

export const SellerSchema = SchemaFactory.createForClass(Seller);