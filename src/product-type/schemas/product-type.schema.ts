import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductTypeDocument = ProductType & Document;

@Schema()
export class ProductType extends Document {
  @Prop()
  name: string;

  // @Prop()
  // age: number;
  //
  // @Prop()
  // breed: string;
}

export const ProductTypeSchema = SchemaFactory.createForClass(ProductType);
