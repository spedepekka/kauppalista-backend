import { Controller, Get, Body, Post } from '@nestjs/common';
import { GroceriesService } from './groceries.service';

@Controller('groceries')
export class GroceriesController {
    constructor(private readonly groceriesService: GroceriesService) {}

    @Post()
    create(@Body() grocery: { name: string }) {
        console.log(grocery)
        return this.groceriesService.create(grocery.name)
    }

    @Get()
    findAll() {
        return this.groceriesService.findAll()
    }
}
