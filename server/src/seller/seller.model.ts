import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";


// export class Inventory {
//   productId: string;
//   currentStock: number;
// }

@InputType("SellerInput")
@ObjectType("SellerType")
@Schema({ collection: "sellers", timestamps: true })
export class Seller {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => String, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  accountId?: Types.ObjectId; //todo: link

  @Field(() => String, { nullable: false })
  @Prop()
  businessName: string;

  // @Field(() => [Inventory], { nullable: true, defaultValue: null })
  // @Prop({ default: null })
  // inventory?: [Inventory]

  @Field(() => Date, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  createdAt?: Date;

  @Field(() => Date, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  updatedAt?: Date;
}

export type SellerDocument = Seller & Document;

export const SellerSchema = SchemaFactory.createForClass(Seller);