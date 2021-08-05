import { Document, model, Schema } from 'mongoose'
import { IProduct } from '../../interfaces/product'

const ProductSchema = new Schema({})
interface IUserSchema extends IProduct, Document {}

// Default export
export default model<IUserSchema>('Product', ProductSchema);