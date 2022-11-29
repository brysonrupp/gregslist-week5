import { carsService } from "../services/CarsService.js"
import BaseController from "../utils/BaseController.js"

export class CarsController extends BaseController {
    constructor() {
        super('api/cars')
        this.router
            .get('', this.getAll)
            .post('', this.create)
            .delete('/:id', this.remove)
            .put
    }


    async create(req, res, next) {

    }

    async remove(req, res, next) {

    }

    async getAll(req, res, next) {
        try {
            const cars = await
                res.send(cars)
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            const updated = await carsService.update(req.params.carId,)
        } catch (error) {

        }
    }
}