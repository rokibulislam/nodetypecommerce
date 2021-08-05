import { injectable } from 'inversify'
import { Error } from 'mongoose'
import { IProduct } from '../interfaces/product'

@injectable()
export class ProductService {

    public async getProducts(): Promise<IProduct[]> {
        return [
            {
                'title': 'test1',
                'price': 20
            },
            {
                'title': 'test2',
                'price': 10
            }
        ];
    }

    public async getProduct(id: string): Promise<IProduct[]> {
        return []
    }

    public async createProduct(data: IProduct) : Promise<IProduct> {
        return data
    }

    public async updateProduct(id: string, data: IProduct): Promise<IProduct> {
        return data
    }

    public async deleteProduct(id: string): Promise<boolean> {
        return true
    }
}