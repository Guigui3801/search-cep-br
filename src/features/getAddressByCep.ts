import { Cep } from "../@types";
import { CepService } from "../services";

const getAddressByCep = async (
  cep: string
): Promise<Cep | Error> => {
  const formatCep = cep.replace(/[^\d]/g, "");
  return await CepService.getAddressByCep(formatCep).catch(
    (err) => {
        if(formatCep.length < 8){
           return new Error(`Digite o cep corretamente!`)
        }
        return new Error(`Houve um erro ao buscar o cep: ${err}`)
    }
  );
};

export default getAddressByCep;
