import {ProductEntity} from "../types";
import {pool} from "../utils/db";
import {ProductRecordResults} from "../types";
import {ValidationError} from "../utils/error";
import {v4 as uuid} from "uuid";

export class ProductRecord implements ProductEntity {
    id?: string;
    description: string;
    drawingNumber: string;
    revision: string;
    itemNumber: string;
    moq: number;
    price: number;
    offerNumber: string;

    constructor(obj: ProductEntity) {
        if (!obj.description || obj.description.length > 50) {
            throw new ValidationError('Opis nie może być pusty, jego maksymalna dopszczalna długość to 50 znaków');
        }
        if (!obj.drawingNumber || obj.drawingNumber.length > 20) {
            throw new ValidationError('Numer rysunku nie może być pusty, jego maksymalna dopuszczalna długość to 20 znaków');
        }
        if (!obj.revision || Number(obj.revision) < 0 || Number(obj.revision) > 99) {
            throw new ValidationError('Numer rewizji nie może być pusty, ujemny oraz jego maksymalna dopuszczalna długość to 2 znaki');
        }
        if (obj.itemNumber.length > 20) {
            throw new ValidationError('Item number możem mieć maksymalnie 20 znaków');
        }
        if (obj.moq < 1) {
            throw new ValidationError('Minimalna ilość zakupu to 1 sztuka');
        }
        if (obj.price > 99999.99 || obj.price < 0.01) {
            throw new ValidationError('Cena powinna mieścić się w zakresie od 0.01 do 99999.99');
        }
        if (obj.offerNumber.length > 8) {
            throw new ValidationError('Numer oferty nie może mieć więcej jak 8 znaków');
        }

        this.id = obj.id;
        this.description = obj.description;
        this.drawingNumber = obj.drawingNumber;
        this.revision = obj.revision;
        this.itemNumber = obj.itemNumber;
        this.moq = obj.moq;
        this.price = obj.price;
        this.offerNumber = obj.offerNumber;

    }

    async insert(): Promise<void> {
        if (!this.id) {
            this.id = uuid();
        } else {
            throw new Error('ID already exists');
        }

        await pool.execute('INSERT INTO `products`(`id`,`description`,`drawingNumber`,`revision`,`itemNumber`,`moq`,`price`,`offerNumber`) VALUES (:id,:description,:drawingNumber,:revision,:itemNumber,:moq,:price,:offerNumber)', this);

        console.log()
    }


    static async getOne(id: string): Promise<ProductRecord | null> {
        const [results] = await pool.execute('SELECT * FROM `products` WHERE id=:id', {
            id,
        }) as ProductRecordResults;

        return results.length === 0 ? null : new ProductRecord(results[0]);
    }

    // moze być nie używana
    static async getAll(): Promise<ProductRecord[]> {
        const [results] = await pool.execute('SELECT * FROM `products` ORDER BY `description` ASC') as ProductRecordResults;
        return results.map(obj => new ProductRecord(obj));
    }

    static async findOne(drawingNumber: string): Promise<ProductRecord | null> {
        const [results] = await pool.execute('SELECT * FROM `products` WHERE drawingNumber=:drawingNumber', {
            drawingNumber,
        }) as ProductRecordResults;

        return results.length === 0 ? null : new ProductRecord(results[0]);
    }

    static async findAll(drawingNumber: string): Promise<ProductRecord[]> {
        const [results] = await pool.execute('SELECT * FROM `products` WHERE `drawingNumber` LIKE :drawingNumber', {
            drawingNumber: `%${drawingNumber}%`,
        }) as ProductRecordResults;

        return results.map(product => new ProductRecord(product));
    }

}