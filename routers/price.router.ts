import {Request, Response, Router} from "express";
import {ProductRecord} from "../records/product.record";
import {ListProductsRes} from "../types";

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

    .get('/get-one/:id', async (req: Request, res: Response): Promise<any> => {
        // console.log(req.params.id);
        const product = await ProductRecord.getOne(req.params.id);
        res.json(product);
    })


    .patch('/update-one/:id', async (req: Request, res: Response): Promise<any> => {
        const updatedProduct = req.body;
        const result = await ProductRecord.updateProductData(updatedProduct);
        res.json(result);
    })

    // todo - aktualizja cen - globalana podwyzka lu obnizka cen produktow - metoda patch - tylko kolumna cena
    .patch('/update-prices', async (req: Request, res: Response): Promise<any> => {
        const {percent} = req.body;
        await ProductRecord.updatePrice(percent);

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

    .delete('/', async (req: Request, res: Response): Promise<any> => {
        const {selectedProductId} = req.body;
        const result = await ProductRecord.deleteOne(selectedProductId);

        res.json(result);
    })

