import express from "express";

import ItemController from "./controllers/ItemController";

const routes = express.Router();

routes.get("items", ItemController.getAll);

export default routes;
