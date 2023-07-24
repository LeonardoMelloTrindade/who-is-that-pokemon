import Api from "./api.service";

export default class PokemonService {

  async getPokemons() {
    try {
      const response = await Api.get("/pokemon/pikachu",)
      return response.data;
    } catch (error) {
      console.error("Ocorreu um erro ao obter os jogos:", error);
      throw error;
    }
  }
 


}