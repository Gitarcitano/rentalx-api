import { Request, Response } from "express";

import { CreateSpecificationsUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(
    private createSpecificationsUseCase: CreateSpecificationsUseCase
  ) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationsUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
