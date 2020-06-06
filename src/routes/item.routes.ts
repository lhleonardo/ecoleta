import express from "express";

import ItemController from "../controllers/ItemController";

const itemRoutes = express.Router();

itemRoutes.get("/", ItemController.getAll);

export default itemRoutes;
