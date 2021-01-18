import { Field, InputType, IntersectionType as it_, OmitType as ot_, PickType as pt_ } from "@nestjs/graphql";
import * as _ from "../_misc/base.inputs";
import { Seller } from "./seller.model";

@InputType()
export class ListSellerInput extends _.OptionalIdInput {
  @Field(() => String, { nullable: true })
  businessName?: string;
}

@InputType()
class SellerInput extends
  ot_(Seller, ['_id', 'inventory', 'createdAt', 'updatedAt'] as const) { }

@InputType()
export class CreateSellerInput extends SellerInput {
  // only supports inserting new seller, not inventory
}

export class UpdateSellerInput extends
  it_(_.RequiredIdInput, SellerInput) {
  // only supports updating seller, not inventory
}

export class UpdateSellerInv extends
  pt_(Seller, ['inventory'] as const) {
  // only for inventory updating
}

export class ListSellerInvInput {
  // list inventory for a specific seller
}

export class ListSellerInvCountInput {
  // retrieve current productId count
}
