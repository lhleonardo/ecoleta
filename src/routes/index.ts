import { Router } from "express";

import ItemRoutes from "./item.routes";

const routes = Router();

routes.use("items", ItemRoutes);

export default routes;
