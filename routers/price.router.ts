import {Request, Response, Router} from "express";
import {ProductRecord} from "../records/product.record";
import {ListProductsRes} from "../types/product/product";

export const priceRouter = Router()

    .get('/:drawingNumber?', async (req: Request, res: Response): Promise<any> => {
        const productsList = await ProductRecord.findAll(req.params.drawingNumber ?? '');
            res.json({
                productsList,
            } as ListProductsRes);
    })

    .post('/', async (req: Request, res: Response): Promise<any> => {
        const product = new ProductRecord(req.body);

        console.log(product);
        await product.insert();

        console.log('po', product);

        res.json(product);
    })

