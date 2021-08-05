import * as express from 'express'
import { inject } from 'inversify'
import { 
    BaseHttpController, controller, 
    httpDelete, httpGet,httpPost, httpPut,
    response, request, interfaces, queryParam, requestParam
} from 'inversify-express-utils'
import { JsonResult } from 'inversify-express-utils/dts/results'

@controller('/categories')
export class CategoryController extends BaseHttpController {

    constructor() {
        super()
    }
    
    @httpGet('/')
    public async getCategories(req: express.Request) : Promise<JsonResult> {
        const statusCode = 200;
        return this.json({
            'id': 'test2'
        },statusCode);
    }

    @httpGet('/:id')
    public async getCategory(req: express.Request) : Promise<JsonResult>  {

        const statusCode = 200;

        return this.json({
            'id': req.params.id
        }, statusCode)
    }
    
    @httpPost("/")
    public async createCategory(@request() req: express.Request,@response() res: express.Response) {
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