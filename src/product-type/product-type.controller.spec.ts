import { Test, TestingModule } from '@nestjs/testing';
import { ProductTypeController } from './product-type.controller';
import { ProductTypeService } from './product-type.service';
import {getModelToken} from "@nestjs/mongoose";
import {ProductType} from "./schemas/product-type.schema";

describe('ProductTypeController', () => {
  let controller: ProductTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductTypeController],
      providers: [
        ProductTypeService,
        {
          provide: getModelToken(ProductType.name),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ProductTypeController>(ProductTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
