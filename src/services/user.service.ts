import { injectable } from 'inversify'
import { Error } from 'mongoose'
import { IUser } from '../interfaces/user'

@injectable()
export class UserService {

    public async getUsers(): Promise<IUser[]> {
        return [];
    }

    public async getUser(id: string): Promise<IUser[]> {
        return []
    }

    public async createUser(data: IUser) : Promise<IUser> {
        return data
    }

    public async updateUser(id: string, data: IUser): Promise<IUser> {
        return data
    }

    public async deleteUser(id: string): Promise<boolean> {
        return true
    }
}