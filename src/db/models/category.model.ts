import { Document, model, Schema } from 'mongoose'
import { ICategory } from '../../interfaces/category'

const CategorySchema = new Schema({})
interface ICategorySchema extends ICategory, Document {}

// Default export
export default model<ICategorySchema>('Category', CategorySchema);