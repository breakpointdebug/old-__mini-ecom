import { Field, InputType, IntersectionType as it_, OmitType as ot_, PickType, PickType as pt_ } from "@nestjs/graphql";
import { Types } from "mongoose";
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
  ot_(Seller, ['_id', 'inventories', 'createdAt', 'updatedAt'] as const) { }

@InputType()
export class CreateSellerInput extends SellerInput {
  // only supports inserting new seller, not inventory
}

@InputType()
export class UpdateSellerInput extends
  it_(_.RequiredId, SellerInput) {
  // only supports updating seller, not inventory
}

@InputType()
export class AssociateProductToInvInput extends _.RequiredId {
  @Field(() => String)
  productId: Types.ObjectId;
}

// @InputType()
// export class UpdateStockInvInput extends _.RequiredId {
//   @Field(() => StockInv)
//   inventories: StockInv;
// }



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
