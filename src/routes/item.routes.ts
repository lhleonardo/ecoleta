import express from "express";

import ItemController from "../controllers/ItemController";

const itemRoutes = express.Router();

itemRoutes.get("/", ItemController.getAll);
// itemRoutes.post("/", ItemController.insert);

export default itemRoutes;
