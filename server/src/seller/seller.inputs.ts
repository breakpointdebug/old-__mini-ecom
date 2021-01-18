import { Field, InputType, IntersectionType as it_, OmitType as ot_, PickType as pt_ } from "@nestjs/graphql";
import { Seller } from "./seller.model";

import * as _ from "../_generic/misc.inputs";

@InputType()
export class ListSellerInput extends _.OptionalId {
  @Field(() => String, { nullable: true })
  businessName?: string;
}

// 'inventory'
@InputType()
class SellerInput extends
  ot_(Seller, ['_id', 'createdAt', 'updatedAt'] as const) { }

@InputType()
export class CreateSellerInput extends SellerInput {
  // only supports inserting new seller, not inventory
}

@InputType()
export class UpdateSellerInput extends
  it_(_.RequiredId, SellerInput) {
  // only supports updating seller, not inventory
}



// // inventory should be in a separate resolver


// export class UpdateSellerInv extends
//   pt_(Seller, ['inventory'] as const) {
//   // only for inventory updating
// }

// export class ListSellerInvInput {
//   // list inventory for a specific seller
// }

// export class ListSellerInvCountInput {
//   // retrieve current productId count
// }
