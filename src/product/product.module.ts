import {Module} from '@nestjs/common';
import {ProductService} from './product.service';
import {ProductController} from './product.controller';
import {getModelToken, MongooseModule} from '@nestjs/mongoose';
import {DeliveryStatus, Product, ProductDocument, ProductSchema} from '../product/schemas/product.schema';
import {Model, Schema} from "mongoose";
import {ProductType} from "../product-type/schemas/product-type.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [
    ProductService,
  ],
})
export class ProductModule {}
