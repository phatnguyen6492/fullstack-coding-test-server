import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../product/schemas/product.schema';
import { Model, Schema } from 'mongoose';
import { QueryDto } from '../global/dto/query.dto';
import { PaginateResponse } from '../global/interface/paginate.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(query: QueryDto): Promise<PaginateResponse<Product>> {
    const findQuery = this.productModel.find();
    const count = await this.productModel
      .find()
      .merge(findQuery)
      .countDocuments();

    findQuery
      .sort({ [query.sortBy]: query.sortType })
      .skip(query.page * query.size)
      .limit(query.size)
      .populate('product_type')
      .populate('customer');

    return {
      items: await findQuery.exec(),
      paginate: {
        page: query.page,
        size: query.size,
        count,
      },
    };
  }

  findOne(id: Schema.Types.ObjectId) {
    return this.productModel
      .findById(id)
      .populate('product_type')
      .populate('customer')
      .exec();
  }

  async update(id: Schema.Types.ObjectId, updateProductDto: UpdateProductDto) {
    await this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true });
    return this.findOne(id);
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
