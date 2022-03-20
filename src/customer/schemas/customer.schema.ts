import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer extends Document {
  @Prop()
  name: string;

  @Prop()
  contact_number: number;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
