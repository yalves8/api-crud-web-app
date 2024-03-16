import express, { Request, Response } from "express";
import { config } from "dotenv";
import { GetProductsController } from "./controllers/get-products/get-product";
import { MongoGetProductsRepository } from "./repositories/get-products/mongo-get-products";
import { MongoClient } from "./database/mongo";

const main = async () => {
  config();

  const app = express();
  const PORT = process.env.PORT || 8000;

  await MongoClient.connect();

  app.get("/products", async (req: Request, res: Response) => {
    const mongoGetProductsRepository = new MongoGetProductsRepository();

    const getProductsController = new GetProductsController(
      mongoGetProductsRepository
    );

    const { body, statusCode } = await getProductsController.handle();
    res.send(body).status(statusCode);
  });

  app.listen(PORT, () => console.log("Servidor iniciado na porta " + PORT));
};

main();
