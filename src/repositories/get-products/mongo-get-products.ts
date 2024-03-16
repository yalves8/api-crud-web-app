import { IGetProductsRepository } from "../../controllers/get-products/protocols";
import { Product } from "../../models/product";

export class MongoGetProductsRepository implements IGetProductsRepository {
  async getProducts(): Promise<Product[]> {
    return [
      {
        id: 1,
        name: "Yasmin",
        preco: 50,
      },
    ];
  }
}

//zMAMCwRpKSHBWlMz
