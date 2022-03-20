import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { ProductType } from '../../product-type/schemas/product-type.schema';
import { Customer } from '../../customer/schemas/customer.schema';

export type ProductDocument = Product & Document;

export enum DeliveryStatus {
  PENDING = 'PENDING',
  ORDERED = 'ORDERED',
  SHIPPED = 'SHIPPED',
  CANCELLED = 'CANCELLED',
}

@Schema()
export class Product extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ProductType' })
  product_type: ProductType;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer' })
  customer: Customer;

  @Prop()
  delivery_status: DeliveryStatus;

  @Prop()
  delivery_address: string;

  @Prop()
  estimated_delivery_date: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
