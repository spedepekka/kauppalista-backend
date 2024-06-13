import { Controller, Get, Body, Post, Delete, Param, Patch } from '@nestjs/common';
import { GroceriesService } from './groceries.service';
import { Prisma } from '@prisma/client';

@Controller('groceries')
export class GroceriesController {
    constructor(private readonly groceriesService: GroceriesService) {}

    @Post()
    create(@Body() createGroceryDto: Prisma.GroceryCreateInput) {
        console.log(createGroceryDto, GroceriesController.name)
        return this.groceriesService.create(createGroceryDto)
    }

    @Get()
    findAll() {
        return this.groceriesService.findAll()
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateGroceryDto: Prisma.GroceryUpdateInput) {
        return this.groceriesService.update(+id, updateGroceryDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.groceriesService.remove(+id)
    }
}
