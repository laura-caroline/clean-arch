import { Body, Controller, Post } from '@nestjs/common';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { CreateCustomerUseCase } from 'src/usecases/customer/create/create-customer.usecase';
@Controller('customer')
export class CustomerController {
  constructor(private readonly createCustomerUseCase: CreateCustomerUseCase) {}

  @Post()
  async create(@Body() body: CreateCustomerDto): Promise<{ message: string }> {
    await this.createCustomerUseCase.execute(body);

    return { message: 'Produto criado com sucesso' };
  }
}
