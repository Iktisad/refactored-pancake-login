import { UserRepository } from "./user.repository.js";
import usersController from "./users.controller.js";
import usersService from "./users.service.js";
import userRoutes from "./user.routes.js";

const repo = UserRepository();
const service = usersService(repo);
const controller = usersController(service);

const module = userRoutes(controller);

export default  module;
