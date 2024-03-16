import {
  CreateProductParams,
  ICreateProductRepository,
} from "../../controllers/create-product/protocols";
import { MongoClient } from "../../database/mongo";
import { Product } from "../../models/product";

export class MongoCreateProduct implements ICreateProductRepository {
  async createProduct(params: CreateProductParams): Promise<Product> {
    const { insertedId } = await MongoClient.db
      .collection("produtos")
      .insertOne(params);

    const product = await MongoClient.db
      .collection<Omit<Product, "id">>("produtos")
      .findOne({ _id: insertedId });

    if (!product) {
      throw new Error("Produto não foi criado");
    }

    const { _id, ...rest } = product;

    return { id: _id.toHexString(), ...rest }; //retornar apenas o id em hex
  }
}
