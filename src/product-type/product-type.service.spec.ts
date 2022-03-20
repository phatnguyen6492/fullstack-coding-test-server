import { Test, TestingModule } from '@nestjs/testing';
import { ProductTypeService } from './product-type.service';
import { ProductType } from './schemas/product-type.schema';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';

describe('ProductTypeService', () => {
  let service: ProductTypeService;

  function mockProductTypeModel(dto: any) {
    this.data = dto;
    this.save = () => {
      return this.data;
    };
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductTypeService,
        {
          provide: getModelToken(ProductType.name),
          useValue: mockProductTypeModel,
        },
      ],
    }).compile();

    service = module.get<ProductTypeService>(ProductTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
