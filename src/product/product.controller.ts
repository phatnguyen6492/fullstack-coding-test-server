import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {QueryDto} from "../global/dto/query.dto";
import { Schema } from 'mongoose';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(@Query() query: QueryDto) {
    return this.productService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: Schema.Types.ObjectId) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: Schema.Types.ObjectId, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
