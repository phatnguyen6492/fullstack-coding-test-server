import { Module } from '@nestjs/common';
import { ProductTypeService } from './product-type.service';
import { ProductTypeController } from './product-type.controller';
import { ProductType, ProductTypeSchema } from './schemas/product-type.schema';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductType.name, schema: ProductTypeSchema },
    ]),
  ],
  controllers: [ProductTypeController],
  providers: [
    ProductTypeService,
  ],
})
export class ProductTypeModule {}
