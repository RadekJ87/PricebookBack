export interface ProductEntity {
    id?: string,
    description: string,
    drawingNumber: string,
    revision: string,
    itemNumber?: string | null,
    moq:number,
    price: number
    offerNumber?: string | null,
}