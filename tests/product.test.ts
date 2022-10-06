import {ProductRecord} from "../records/product.record";
import {pool} from "../utils/db";


const basicObject = {
    description: 'Welded table',
    drawingNumber: '000456',
    revision: '0',
    itemNumber: '',
    moq: 5,
    price: 123.99,
    offerNumber: ''
};

afterAll(async () => {
    await pool.end();
});


test('ProductRecord returns data for one entry', async () => {
    const product = await ProductRecord.getOne('2');

    expect(product).toBeDefined();
    expect(product.description).toBe('Biurko');
});

test('ProductRecord returns null for not existing entry', async () => {
    const product = await ProductRecord.getOne('10');

    expect(product).toBeNull();
});


test('ProductRecord finds data for one entry', async () => {
    const product = await ProductRecord.findOne('456');


    expect(product).toBeDefined();
    expect(product.drawingNumber).toBe('456');
});

test('ProductRecord cannot find data one entry', async () => {
    const product = await ProductRecord.findOne('45');

    expect(product).toBeNull();
});

test('ProductRecord returns array of found entries', async () => {
    const products = await ProductRecord.findAll('');


    expect(products).toBeDefined();
    expect(products[0].moq).toBeGreaterThanOrEqual(6);
});

test('ProductRecord returns array of products for search of drawings containing products phrase `25`', async () => {
    const products = await ProductRecord.findAll('25');

    expect(products).toBeDefined();
    expect(products).not.toBe([]);
    expect(products.length).toBe(2);
    expect(products[0].description).toBe('Komoda');
});

test('ProductRecord returns empty array for search of data that not exist', async () => {
    const products = await ProductRecord.findAll('agsd');

    expect(products).toBeDefined();
    expect(products).toEqual([]);
});

test('ProductRecord returns data of all found entries', async () => {
    const products = await ProductRecord.getAll();

    expect(products).toBeDefined();
    expect(products).not.toBe([]);
    expect(products.length).toBeGreaterThanOrEqual(5);
});

test('ProductRecord insterts data to DB', async () => {
    const product = new ProductRecord(basicObject);

    await product.insert();

    expect(product.id).toBeDefined();
});

test('ProductRecord is deleting existing record from  DB', async () => {
    const productId = '324';
    const deletedProductData = await ProductRecord.deleteOne(productId)

    expect(deletedProductData).toMatch(`Product with ID ${324} has been deleted`);
});

test('ProductRecord is trying to delete record from DB that does not exist', async () => {
    const productId = '12334242';
    const deletedProductData = await ProductRecord.deleteOne(productId)

    expect(deletedProductData).toMatch(`Oops... Something gone wrong!`);
});

test('ProductRecord is increasing the prices by 10%', async () => {
    const productsPricesBeforeUpdate = (await ProductRecord.getAll()).map(product => product.price);
    const productsPricesIncreasedBy10Percent = (await ProductRecord.getAll()).map(product => Number((product.price * 1.1).toFixed(2)));

    expect(productsPricesBeforeUpdate[0]).toBeLessThan(productsPricesIncreasedBy10Percent[0]);

    await ProductRecord.updatePrice(10);
    const productsPricesAfterUpdate = (await ProductRecord.getAll()).map(product => Number((product.price).toFixed(2)));

    expect(productsPricesIncreasedBy10Percent[0]).toEqual(productsPricesAfterUpdate[0]);
});

test('ProductRecord is decreasing the prices by 10%', async () => {
    const productsPricesBeforeUpdate = (await ProductRecord.getAll()).map(product => product.price);
    const productsPricesDecreasedBy10Percent = (await ProductRecord.getAll()).map(product => Number((product.price * 0.9).toFixed(2)));

    expect(productsPricesBeforeUpdate[0]).toBeGreaterThan(productsPricesDecreasedBy10Percent[0]);

    await ProductRecord.updatePrice(-10);
    const productsPricesAfterUpdate = (await ProductRecord.getAll()).map(product => Number((product.price).toFixed(2)));

    expect(productsPricesDecreasedBy10Percent[0]).toEqual(productsPricesAfterUpdate[0]);
});

test('ProductRecord is updating revision of single product data', async () => {
    const product = await ProductRecord.getOne('2');
    expect(product.revision).toBe('6');
    product.revision = '7';

    const result = await ProductRecord.updateProductData({...product});
    expect(result).toMatch(`Product with ID ${product.id} has been modified`);

    const updatedProduct = await ProductRecord.getOne('2');
    expect(updatedProduct.revision).toBe('7');

});

test('ProductRecord is trying to update all data except ID in product that does not exist', async () => {
    const product = await ProductRecord.getOne('223');
    expect(product).toBeNull();

    const result = await ProductRecord.updateProductData({id: '223', ...basicObject});
    expect(result).toMatch(`Oops... Something gone wrong!`);
});



