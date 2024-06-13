import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class GroceriesService {

    constructor(private readonly databaseService: DatabaseService) {}

    async create(createGroceryDto: Prisma.GroceryCreateInput) {
        console.log(`New grocery ${createGroceryDto}`)
        return this.databaseService.grocery.create({
            data: createGroceryDto
        })
    }

    async findAll() {
        return this.databaseService.grocery.findMany()
    }

    // TODO: Disable id update
    async update(id: number, updateGroceryDto: Prisma.GroceryUpdateInput) {
        return this.databaseService.grocery.update({
            where: {
              id,
            },
            data: updateGroceryDto,
        })
    }

    async remove(id: number) {
        return this.databaseService.grocery.delete({
            where: {
              id,
            }
        })
    }
}
