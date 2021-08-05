import { Document, model, Schema } from 'mongoose'
import { IUser } from '../../interfaces/user'
const UserSchema = new Schema({})
interface IUserSchema extends IUser, Document {}

// Default export
export default model<IUserSchema>('User', UserSchema);