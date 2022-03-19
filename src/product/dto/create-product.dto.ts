import { DeliveryStatus } from '../schemas/product.schema';
import { Schema } from 'mongoose';

export class CreateProductDto {
  product_type: Schema.Types.ObjectId;

  customer: Schema.Types.ObjectId;

  delivery_status: DeliveryStatus;

  delivery_address: string;

  estimated_delivery_date: Date;
}
