import {Request, Response, Router} from "express";
import {ProductRecord} from "../records/product.record";
import {ListProductsRes} from "../types/product/product";

export const priceRouter = Router()
    .get('/', async (req: Request, res: Response): Promise<any> => {
        const productsList = await ProductRecord.getAll();
        res.json({
            productsList,
        } as ListProductsRes);
        // console.log(productsList);
    })
    .post('/', async (req: Request, res: Response): Promise<any> => {
       const product = new ProductRecord(req.body);
       console.log(product)
    });
