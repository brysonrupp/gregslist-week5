import { dbContext } from "../db/DbContext.js";

class CarsService {
    async getAll() {
        const cars = await dbContext.Cars.find()
        return cars
    }

    async create(carData) {
        const newCar = await dbContext.Cars.create(carData)
        return newCar
    }

    async remove(carId) {
        // await dbContext.Cars.findByIdAndRemove(carId)
        const car = await dbContext.Cars.findById(carId)
        if (!car) throw new BadRequest('no car at id' + carId)
        await car.remove()
        return 'deleted ${car.make} ${car.model}'
    }

    async update(carId, carData) {
        // const updated = 
        const original = await dbContext.Cars.findById(carId)
        if (!original) throw new BadRequest('no car at id' + carId)

    }

}


export const carsService = new CarsService()