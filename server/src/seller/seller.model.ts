import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Product } from "../product/product.model";
import { BaseModel } from '../_generic/base.model';


// @InputType("StockInvInput")
// @ObjectType("StockInvType")
// @Schema({ timestamps: true })
// export class StockInv extends BaseModel {

//   @Field(() => String)
//   @Prop()
//   productId: string;

//   @Field(() => Number)
//   @Prop()
//   stockCount: number;
// }

@InputType("InventoriesInput")
@ObjectType("InventoriesType")
class Inventories {
  @Field(() => String)
  productId: string;  //logic check, if exists, then just update, else insert

  @Field(() => Number)
  stockCount: number;
}

@InputType("SellerInput")
@ObjectType("SellerType")
@Schema({ collection: "sellers", timestamps: true })
export class Seller extends BaseModel {

  @Field(() => String, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  accountId?: Types.ObjectId; //todo: link by ref

  @Field(() => String)
  @Prop()
  businessName: string;

  @Field(() => [Inventories])
  @Prop()
  inventories: Inventories[]
}

export type SellerDocument = Seller & Document;

export const SellerSchema = SchemaFactory.createForClass(Seller);