import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProductsService {
    constructor(private readonly prisma: PrismaService) {}


    findAll() {
        return this.prisma.product.findMany();
    }


    async findOne(id: number) {
        const product = await this.prisma.product.findUnique({
            where: { product_id: id },
        });

        if (!product) {
            throw new NotFoundException('Product not found');
        }

        return product;
    }
}
