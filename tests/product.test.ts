import {ProductRecord} from "../records/product.record";
import { pool } from "../utils/db";


afterAll(async () => {
    await pool.end();
});


test('ProductRecord returns data for one entry', async ()=>{
    const product = await ProductRecord.getOne('2');

    expect(product).toBeDefined();
    expect(product.description).toBe('Biurko');
});

test('ProductRecord returns null for unexisting entry', async ()=>{
    const product = await ProductRecord.getOne('10');

    expect(product).toBeNull();
});


test('ProductRecord finds data for one entry', async ()=>{
    const product = await ProductRecord.findOne('456');

    console.log(product);
    expect(product).toBeDefined();
    expect(product.drawingNumber).toBe('456');
});

test('ProductRecord cannot find data one entry', async ()=>{
    const product = await ProductRecord.findOne('45');

    expect(product).toBeNull();
});

test('ProductRecord returns array of found entries', async ()=>{
    const products = await ProductRecord.findAll('');


    expect(products).toBeDefined();
    expect(products[0].moq).toBeGreaterThanOrEqual(6);
});

test('ProductRecord returns array of products for search of drawings containing products phrase `25`', async ()=>{
    const products = await ProductRecord.findAll('25');

    console.log(products);
    expect(products).toBeDefined();
    expect(products).not.toBe([]);
    expect(products.length). toBe(2);
    expect(products[0].description).toBe('Komoda');
});

test('ProductRecord returns empty array for search of data that not exist', async ()=>{
    const products = await ProductRecord.findAll('agsd');

    expect(products).toBeDefined();
    expect(products).toEqual([]);
});

test('ProductRecord returns data of all found entries', async ()=>{
    const products = await ProductRecord.getAll();

    console.log(products);
    expect(products).toBeDefined();
    expect(products).not.toBe([]);
    expect(products.length).toBeGreaterThanOrEqual(5);
});

