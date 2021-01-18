import { Field, OmitType, PickType } from "@nestjs/graphql";
import { OptionalIdInput } from "src/_misc/base.inputs";
import { Seller } from "./seller.model";

export class ListSellerInput extends OptionalIdInput {
  @Field(() => String, { nullable: true })
  businessName?: string;
}

export class CreateSellerInput extends
  OmitType(Seller, ['_id', 'inventory', 'createdAt', 'updatedAt'] as const) {
  // only supports inserting new seller, not inventory
}

export class UpdateSellerInput extends
  OmitType(Seller, ['inventory', 'createdAt', 'updatedAt'] as const) {
  // only supports updating seller, not inventory
}

export class UpdateSellerInv extends
  PickType(Seller, ['inventory'] as const) {
  // only for inventory updating
}

export class ListSellerInvInput {
  // list inventory for a specific seller
}

export class ListSellerInvCountInput {
  // retrieve current productId count
}
