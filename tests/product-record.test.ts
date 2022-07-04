import {ProductRecord} from "../records/product.record";


const basicObject = {
    description: 'Welded table',
    drawingNumber: '000456',
    revision: '0',
    itemNumber: '',
    moq: 5,
    price: 123.99,
    offerNumber: ''
};


test('Can build basic PriceRecord', () => {
    const product = new ProductRecord(basicObject);

    expect(product.description).toBe('Welded table');
    expect(product.drawingNumber).toBe('000456');
    expect(product.revision).toBe('0');
    expect(product.itemNumber).toBe('');
    expect(product.moq).toBe(5);
    expect(product.price).toBe(123.99);
    expect(product.offerNumber).toBe('');
});

test('Validates invalid description', () => {

    expect(() => new ProductRecord({
        ...basicObject,
        description: '',
    })).toThrow('Opis nie może być pusty, jego maksymalna dopszczalna długość to 50 znaków');

    expect(() => new ProductRecord({
        ...basicObject,
        description: '123456789012345678901234567890123456789012345678901',
    })).toThrow('Opis nie może być pusty, jego maksymalna dopszczalna długość to 50 znaków')

});

test('Validates invalid drawingNumber', () => {

    expect(() => new ProductRecord({
        ...basicObject,
        drawingNumber: '',
    })).toThrow('Numer rysunku nie może być pusty, jego maksymalna dopuszczalna długość to 20 znaków');

    expect(() => new ProductRecord({
        ...basicObject,
        drawingNumber: '123456789012345678901',
    })).toThrow('Numer rysunku nie może być pusty, jego maksymalna dopuszczalna długość to 20 znaków')

});

test('Validates invalid revision', () => {

    expect(() => new ProductRecord({
        ...basicObject,
        revision: '-1',
    })).toThrow('Numer rewizji nie może być pusty, ujemny oraz jego maksymalna dopuszczalna długość to 2 znaki');

    expect(() => new ProductRecord({
        ...basicObject,
        revision: '100',
    })).toThrow('Numer rewizji nie może być pusty, ujemny oraz jego maksymalna dopuszczalna długość to 2 znaki');

    expect(() => new ProductRecord({
        ...basicObject,
        revision: '',
    })).toThrow('Numer rewizji nie może być pusty, ujemny oraz jego maksymalna dopuszczalna długość to 2 znaki');

});

test('Validates invalid itemNumber', () => {

    expect(() => new ProductRecord({
        ...basicObject,
        itemNumber: '123456789012345678901',
    })).toThrow('Item number możem mieć maksymalnie 20 znaków');

});

test('Validates invalid MOQ', () => {

    expect(() => new ProductRecord({
        ...basicObject,
        moq: 0,
    })).toThrow('Minimalna ilość zakupu to 1 sztuka');

});

test('Validates invalid price', () => {

    expect(() => new ProductRecord({
        ...basicObject,
        price: 0,
    })).toThrow('Cena powinna mieścić się w zakresie od 0.01 do 99999.99');

    expect(() => new ProductRecord({
        ...basicObject,
        price: 100000,
    })).toThrow('Cena powinna mieścić się w zakresie od 0.01 do 99999.99');

});


test('Validates invalid offerNumber', () => {

    expect(() => new ProductRecord({
        ...basicObject,
        offerNumber: '123456789',
    })).toThrow('Numer oferty nie może mieć więcej jak 8 znaków');

});