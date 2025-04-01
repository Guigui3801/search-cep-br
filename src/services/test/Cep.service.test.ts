import MockAdapter from "axios-mock-adapter";
import HttpConfig from "../../http.config";
import CepService from "../Cep.service";

describe("CepService", () => {
  let mock: MockAdapter;
  beforeAll(() => {
    mock = new MockAdapter(HttpConfig["Http"]);
  });
  afterAll(() => {
    mock.restore();
  });

  const mockedResponse = {
    cep: "01001-000",
    logradouro: "Praça da Sé",
    complemento: "lado ímpar",
    unidade: "",
    bairro: "Sé",
    localidade: "São Paulo",
    uf: "SP",
    estado: "São Paulo",
    regiao: "Sudeste",
    ibge: "3550308",
    gia: "1004",
    ddd: "11",
    siafi: "7107",
  };

  it("getAddressByCep", async () => {
    const cep = "12345678";
    mock.onGet(`/${cep}/json`).reply(200, mockedResponse);
    const response = await CepService.getAddressByCep(cep);
    expect(response).toEqual(mockedResponse);
  });
});
