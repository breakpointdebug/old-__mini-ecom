import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { ProductModule } from './product/product.module';
import { AccountModule } from './account/account.module';
import { SellerModule } from './seller/seller.module';
import { InventoryModule } from './inventory/inventory.module';

import * as config from 'config';
const dbConf = config.get('config.db');
const gqlConf = config.get('config.gql');

@Module({
  imports: [
    MongooseModule.forRoot(
      dbConf.url_local,
      {
        useNewUrlParser: true,
        bufferCommands: false,
        bufferMaxEntries: 0,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        autoIndex: true
      }
    ),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      path: gqlConf.url,
      context: ({ req }) => ({ req }),
      sortSchema: true,
      playground: true,
      debug: true,
    }),
    ProductModule,
    AccountModule,
    SellerModule,
    InventoryModule
  ]
})
export class AppModule { }
