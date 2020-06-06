import ItemService from "../services/ItemService";

import { Request, Response } from "express";

import * as yup from "yup";
import ItemDTO from "../dto/Item";

/**
 * Controlador de Requisições
 */
class ItemController {
  async insert(request: Request, response: Response) {
    const data: ItemDTO = request.body;

    const persisted = await ItemService.insert(data);

    return response.status(200).json(persisted);
  }

  async getAll(request: Request, response: Response) {
    const items = await ItemService.getAll();

    return response.status(200).json({ items });
  }
}

export default new ItemController();
