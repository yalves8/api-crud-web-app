import { IGetProductsRepository } from "../../controllers/get-products/protocols";
import { MongoClient } from "../../database/mongo";
import { Product } from "../../models/product";

export class MongoGetProductsRepository implements IGetProductsRepository {
  async getProducts(): Promise<Product[]> {
    const products = await MongoClient.db
      .collection<Omit<Product, "id">>("produtos")
      .find({})
      .toArray();
    return products.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}

//zMAMCwRpKSHBWlMz
