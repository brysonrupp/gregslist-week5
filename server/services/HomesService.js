import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class HomesService {
    async getAll(query) {
        const homes = await dbContext.Homes.find(query).sort('price, -size')
        return homes
    }

    async create(homeData) {
        const newHome = await dbContext.Homes.create(homeData)
        return newHome
    }

    async remove(homeId) {
        const home = await dbContext.Homes.findById(homeId)
        if (!home) throw new BadRequest('no home at id: ' + homeId)
        await home.remove()
        return `deleted ${home.year} ${home.description}`
    }

    async update(homeId, homeData) {
        const original = await dbContext.Homes.findById(homeId)
        if (!original) throw new BadRequest('no home at id: ' + homeId)

        original.description = homeData.description ? homeData.description : original.description
        original.year = homeData.year !== undefined ? homeData.year : original.year
        original.price = homeData.price !== undefined ? homeData.price : original.price
        original.size = homeData.size ? homeData.size : original.size
        original.imgUrl = homeData.imgUrl ? homeData.imgUrl : original.imgUrl

        await original.save()
        return original
    }





}


export const homesService = new HomesService()