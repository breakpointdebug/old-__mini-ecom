import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { Product } from "../product/product.model";
import { BaseModel } from '../_generic/base.model';


@InputType("StockInvInput")
@ObjectType("StockInvType")
@Schema()
export class StockInv {
  @Field(() => String)
  @Prop({ unique: true, type: Types.ObjectId, ref: Product.name })
  productId: Types.ObjectId;

  @Field(() => Number, { defaultValue: 0 })
  @Prop({ default: 0 })
  stockCount: number;
}

const StockInvSchema = SchemaFactory.createForClass(StockInv);

@InputType("SellerInput")
@ObjectType("SellerType")
@Schema({ collection: "sellers", timestamps: true })
export class Seller extends BaseModel {

  @Field(() => String, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  accountId?: Types.ObjectId; //todo: link by ref

  @Field(() => String, { nullable: false })
  @Prop({ unique: true })
  businessName: string;

  @Field(() => [StockInv], { nullable: true, defaultValue: null })
  @Prop({ unique: true, default: null, type: [StockInvSchema], ref: StockInv.name })
  inventories?: [StockInv]
}

export type SellerDocument = Seller & Document;

export const SellerSchema = SchemaFactory.createForClass(Seller);