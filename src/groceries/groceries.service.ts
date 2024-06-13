import { Injectable } from '@nestjs/common';

@Injectable()
export class GroceriesService {

    private groceries = [
        {
            "id": 1,
            "name": "banana",
            "bought": false
        },
        {
            "id": 2,
            "name": "apple",
            "bought": false
        },
    ]

    findAll() {
        return this.groceries
    }

    create(grocery: string) {
        console.log(`New grocery ${grocery}`)
        this.groceries.push({"id": 666, "name": grocery, "bought": false})
        return this.groceries
    }
}
