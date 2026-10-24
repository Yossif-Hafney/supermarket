import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { ResponseMessage } from '../common/decorators/response-message.decorator.js';

@Controller(['products', 'product'])
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    @ResponseMessage('Products retrieved successfully')
    findAll() {
        return this.productsService.findAll();
    }

    @Get(':id')
    @ResponseMessage('Product retrieved successfully')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.productsService.findOne(id);
    }
}
