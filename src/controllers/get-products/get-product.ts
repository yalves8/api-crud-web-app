import { IGetProductsController, IGetProductsRepository } from "./protocols";

export class GetProductsController implements IGetProductsController {
  constructor(private readonly getProductsRepository: IGetProductsRepository) {}

  async handle() {
    try {
      const products = await this.getProductsRepository.getProducts();
      return {
        statusCode: 200,
        body: products,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Wrong!",
      };
    }
  }
}
