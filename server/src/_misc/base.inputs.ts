import { Field, InputType } from "@nestjs/graphql";
import { Types } from "mongoose";

@InputType()
export class OptionalIdInput {
  @Field(() => String, { nullable: true })
  _id?: Types.ObjectId;
}

@InputType()
export class RequiredIdInput {
  @Field(() => String)
  _id: Types.ObjectId;
}