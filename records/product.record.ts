import {ProductEntity} from "../types";
import {pool} from "../utils/db";
import {ProductRecordResults} from "../types/product/product";

export class ProductRecord implements ProductEntity{
    id?: string | null;
    description: string;
    drawingNumber: string;
    revision: number;
    itemNumber?: string | null;
    moq: number;
    price: number;
    offerNumber?: number | null;

    constructor(obj: ProductEntity) {
        //obsluga bledow
        this.id = obj.id;
        this.description = obj.description;
        this.drawingNumber = obj.drawingNumber;
        this.revision = obj.revision;
        this.itemNumber = obj.itemNumber;
        this.moq = obj.moq;
        this.price = obj.price;
        this.offerNumber = obj.offerNumber;

    }

    static async listAll(): Promise<ProductRecord[]>{
        const [results] = await pool.execute('SELECT * FROM `products` ORDER BY `description` ASC') as ProductRecordResults;
        return results.map(obj => new ProductRecord(obj));
    }

}