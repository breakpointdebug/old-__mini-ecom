import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { Prop, Schema } from "@nestjs/mongoose";
import { Types, Document } from "mongoose";

@InputType()
@ObjectType()
@Schema()
export abstract class BaseModel {
  @Field(() => String)
  _id: Types.ObjectId;

  @Field(() => Date, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  createdAt?: Date;

  @Field(() => Date, { nullable: true, defaultValue: null })
  @Prop({ default: null })
  updatedAt?: Date;

}