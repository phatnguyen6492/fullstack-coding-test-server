import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config';
import { ProductTypeModule } from './product-type/product-type.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `config.${process.env.NODE_ENV}`,
      isGlobal: true,
    }),
    ProductModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    // MongooseModule.forRoot('mongodb://mongodb/nest'),
    ProductTypeModule,
    CustomerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
