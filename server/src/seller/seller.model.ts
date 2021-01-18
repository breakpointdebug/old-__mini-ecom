import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

export class SellerInventory {
  productId: string;
  currentStock: number;
}

@Schema({ collection: "sellers", timestamps: true })
export class Seller {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  accountId?: Types.ObjectId; //todo: link

  @Field(() => [SellerInventory], { nullable: true, defaultValue: null })
  @Prop({ default: null })
  inventory?: [SellerInventory]

  @Field(() => Date, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  createdAt?: Date;

  @Field(() => Date, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  updatedAt?: Date;
}

export type SellerDocument = Seller & Document;

export const SellerSchema = SchemaFactory.createForClass(Seller);