import { Product } from "../../models/product";

export interface CreateProductParams {
  name: string;
  preco: number;
}

export interface ICreateProductRepository {
  createProduct(params: CreateProductParams): Promise<Product>;
}
