import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationsUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationsUseCase = new CreateSpecificationsUseCase(
  specificationsRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationsUseCase
);

export { createSpecificationController };
