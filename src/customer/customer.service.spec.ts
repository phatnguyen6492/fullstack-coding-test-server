import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';
import { getModelToken } from '@nestjs/mongoose';
import { Customer } from './schemas/customer.schema';

describe('CustomerService', () => {
  let service: CustomerService;
  function mockCustomerModel(dto: any) {
    this.data = dto;
    this.save = () => {
      return this.data;
    };
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomerService,
        {
          provide: getModelToken(Customer.name),
          useValue: mockCustomerModel,
        },
      ],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
