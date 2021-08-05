import * as express from 'express'
import { inject } from 'inversify'
import { 
    BaseHttpController, controller, 
    httpDelete, httpGet,httpPost, httpPut,
    response, request, interfaces, queryParam, requestParam
} from 'inversify-express-utils'
import { JsonResult } from 'inversify-express-utils/dts/results'

import TYPES from '../constants/types';
import { ProductService } from './../services/product.service'

@controller('/products')
export class ProductController extends BaseHttpController {

    constructor(@inject(TYPES.ProductService) private productService: ProductService) {
        super();
    }
    
    @httpGet('/')
    public async getProducts(req: express.Request) : Promise<JsonResult> {
        let contents = await this.productService.getProducts()
        const statusCode = 200;
        return this.json(contents,statusCode);
    }

    @httpGet('/:id')
    public async getProduct(req: express.Request) : Promise<JsonResult>  {
        const statusCode = 200;
        return this.json({'id': req.params.id}, statusCode)
    }
    @httpPost("/")
    public async createProduct(@request() req: express.Request,@response() res: express.Response) {
        try {

        } catch(err) {
            res.status(400).json(
                {
                    error: err.message
                }
            )
        }
    }

    /*
    @httpDelete("/:id")
    public deleteProduct(@requestParam("id") id: string, @response() res: express.Response):  {
        return 1;
    }
    */
 }