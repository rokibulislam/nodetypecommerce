import { injectable } from 'inversify'
import { Error } from 'mongoose'
import { ICategory } from '../interfaces/category'

@injectable()
export class CategoryService {

    public async getCategories(): Promise<ICategory[]> {
        return [];
    }

    public async getCategory(id: string): Promise<ICategory[]> {
        return []
    }

    public async createCategory(data: ICategory) : Promise<ICategory> {
        return data
    }

    public async updateCategory(id: string, data: ICategory): Promise<ICategory> {
        return data
    }

    public async deleteCategory(id: string): Promise<boolean> {
        return true
    }
}