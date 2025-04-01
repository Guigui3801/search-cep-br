import { Cep } from "../@types";
import HttpConfig from "../http.config";

class CepService extends HttpConfig {
  static getAddressByCep(cep: string) {
    return this.Http.get<Cep>(`/${cep}/json`).then(this.getData);
  }
}

export default CepService;
