import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import {getModelToken, MongooseModule} from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config';
import { ProductTypeModule } from './product-type/product-type.module';
import { CustomerModule } from './customer/customer.module';
import {ProductType} from "./product-type/schemas/product-type.schema";

const mockProductTypeService = {};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `config`,
      isGlobal: true,
    }),
    ProductModule,
    MongooseModule.forRoot(process.env.MONGO),
    ProductTypeModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
