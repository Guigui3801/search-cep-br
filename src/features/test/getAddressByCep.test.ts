import { Cep } from "../../@types";
import getAddressByCep from "../getCepByAddress";
import { CepService } from "../../services";

jest.mock("../../services/Cep.service");

describe("getAddressByCep", () => {
  const mockResponse: Cep = {
    cep: "01001000",
    logradouro: "Praça da Sé",
    complemento: "lado ímpar",
    bairro: "Sé",
    localidade: "São Paulo",
    uf: "SP",
    ibge: "3550308",
    gia: "1004",
    ddd: "11",
    unidade: "",
    estado: "Rio de Janeiro",
    regiao: "",
    siafi: "7107",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // Implementação padrão que não deve ser chamada para testes de validação
    (CepService.getAddressByCep as jest.Mock).mockRejectedValue(new Error("Serviço não deveria ser chamado"));
  });

  it("deve formatar corretamente o CEP removendo caracteres não numéricos", async () => {
    (CepService.getAddressByCep as jest.Mock).mockResolvedValue(mockResponse);
    const result = await getAddressByCep("01001-000");
    expect(CepService.getAddressByCep).toHaveBeenCalledWith("01001000");
    expect(result).toEqual(mockResponse);
  });

  it("deve retornar erro quando CEP tiver menos de 8 dígitos", async () => {
    const result = await getAddressByCep("12345");
    expect(result).toEqual(new Error("Digite o cep corretamente!"));
  });

  it("deve retornar os dados do endereço quando a busca for bem-sucedida", async () => {
    (CepService.getAddressByCep as jest.Mock).mockResolvedValue(mockResponse);
    const result = await getAddressByCep("22030001");
    expect(result).toEqual(mockResponse);
  });

  it("deve retornar erro quando o serviço falhar", async () => {
    const errorMessage = "Timeout";
    (CepService.getAddressByCep as jest.Mock).mockRejectedValue(new Error(errorMessage));
    
    const result = await getAddressByCep("22030001");
    expect(result).toEqual(new Error(`Houve um erro ao buscar o cep: Error: ${errorMessage}`));
  });

  it("deve retornar erro quando CEP estiver vazio", async () => {
    const result = await getAddressByCep("");
    expect(result).toEqual(new Error("Digite o cep corretamente!"));
  });

  it("deve sempre retornar Promise<Cep | Error>", async () => {

    (CepService.getAddressByCep as jest.Mock).mockResolvedValue(mockResponse);
    const successResult = await getAddressByCep("22030001");
    expect("cep" in (successResult as Cep)).toBeTruthy();
    

    (CepService.getAddressByCep as jest.Mock).mockRejectedValue(new Error("Erro simulado"));
    const errorResult = await getAddressByCep("22030001");
    expect(errorResult).toBeInstanceOf(Error);
  });
});