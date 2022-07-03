import {ProductEntity} from "./product-entity";
import {ProductRecord} from "../../records/product.record";
import {FieldPacket} from "mysql2";

export interface ListProductsRes {
    productsList: ProductEntity[];
}
export type ProductRecordResults = [ProductRecord[], FieldPacket[]];