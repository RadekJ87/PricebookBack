export interface ProductEntity {
    id?: string,
    description: string,
    drawingNumber: string,
    revision: number;
    itemNumber?: string | null,
    moq:number,
    price: number
    offerNumber?: number | null,
}