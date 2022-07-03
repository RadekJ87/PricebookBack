import {Request, Response, Router} from "express";
import {ProductRecord} from "../records/product.record";
import {ListProductsRes} from "../types/product/product";

export const priceRouter = Router()
    .get('/', async (req:Request, res: Response):Promise<any>=> {
        const productsList = await ProductRecord.listAll();
        res.json({
            productsList,
        } as ListProductsRes);
        console.log(productsList);
    });