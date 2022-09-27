import {Request, Response, Router} from "express";
import {ProductRecord} from "../records/product.record";
import {ListOfferRes, ListProductsRes} from "../types";

export const priceRouter = Router()

    .get('/:drawingNumber?', async (req: Request, res: Response): Promise<any> => {
        const productsList = await ProductRecord.findAll(req.params.drawingNumber ?? '');
            res.json({
                productsList,
            } as ListProductsRes);
    })

    // todo - wyswietlanie wszystkich produktow z ofery
    .get('/offer/:offerNumber?', async (req: Request, res: Response): Promise<any> => {
         const productsList = await ProductRecord.getOfferDetails(req.params.offerNumber ?? '');
         res.json({
             productsList,
         } as ListProductsRes);
    })

    // todo - aktualizja cen - globalana podwyzka lu obnizka cen produktow - metoda patch - tylko kolumna cena
    .patch('/update-prices', async (req: Request, res: Response): Promise<any> => {
           const {percent} = req.body;
           console.log(percent);
           const test = await ProductRecord.update(percent);

           res.json(`Prices changed by ${percent}`);
    })


    .post('/', async (req: Request, res: Response): Promise<any> => {
        console.log('body', req.body);

        const product = new ProductRecord(req.body);

        console.log(product);
        await product.insert();

        console.log('po', product);

        res.json(product);
    })

