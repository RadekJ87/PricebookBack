export interface ProductEntity {
    id: string,
    description: string,
    drawingNumber: string,
    itemNumber?: string | null,
    moq:number,
    price: number
}