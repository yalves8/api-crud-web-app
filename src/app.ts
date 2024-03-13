import express, { Request, Response } from "express";
import { GetProductsController } from "./controllers/get-products/get-product";
import { MongoGetProductsRepository } from "./repositories/get-products/mongo-get-products";

const PORT = process.env.PORT || 8091;

const app = express();

app.get("/products", async (req: Request, res: Response) => {
  const mongoGetProductsRepository = new MongoGetProductsRepository();

  const getProductsController = new GetProductsController(
    mongoGetProductsRepository
  );

  const { body, statusCode } = await getProductsController.handle();
  res.send(body).status(statusCode);
});

app.listen(PORT, () => console.log("Servidor iniciado na porta " + PORT));
