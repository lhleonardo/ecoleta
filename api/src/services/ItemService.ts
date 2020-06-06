import connection from "../database/connection";
import ItemDTO from "../dto/Item";

class ItemService {
  /**
   * Busca todos os itens de coleta existentes
   */
  async getAll(): Promise<ItemDTO[]> {
    return await connection("items").select("*");
  }

  async insert({ title, image }: ItemDTO) {
    const data: ItemDTO[] = await connection("items").insert({ title, image });

    return { id: data[0], title, image };
  }
}

export default new ItemService();
