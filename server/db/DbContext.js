import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { CarSchema } from '../models/Car.js';
import { HomeSchema } from '../models/Home.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Cars = mongoose.model('car', CarSchema)
  Homes = mongoose.model('home', HomeSchema)
}

export const dbContext = new DbContext()
