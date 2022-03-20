import { Injectable } from '@nestjs/common';
import { CreateProductTypeDto } from './dto/create-product-type.dto';
import { UpdateProductTypeDto } from './dto/update-product-type.dto';
import {
  ProductType,
  ProductTypeDocument,
} from './schemas/product-type.schema';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { QueryDto } from '../global/dto/query.dto';
import { PaginateResponse } from '../global/interface/paginate.interface';

@Injectable()
export class ProductTypeService {
  constructor(
    @InjectModel(ProductType.name)
    private productTypeModel: Model<ProductTypeDocument>,
  ) {}

  create(createProductTypeDto: CreateProductTypeDto) {
    const createdProductType = new this.productTypeModel(createProductTypeDto);
    return createdProductType.save();
  }

  async findAll(query: QueryDto): Promise<PaginateResponse<ProductType>> {
    const findQuery = this.productTypeModel.find();
    const count = await this.productTypeModel
      .find()
      .merge(findQuery)
      .countDocuments();

    findQuery
      .sort({ [query.sortBy]: query.sortType })
      .skip(query.page * query.size)
      .limit(query.size);

    return {
      items: await findQuery.exec(),
      paginate: {
        page: query.page,
        size: query.size,
        count,
      },
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} productType`;
  }

  update(id: number, updateProductTypeDto: UpdateProductTypeDto) {
    return `This action updates a #${id} productType`;
  }

  remove(id: number) {
    return `This action removes a #${id} productType`;
  }
}
