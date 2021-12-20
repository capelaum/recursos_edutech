import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

import { getCepData } from "services/viaCep";

import { CepData, Container, InputContainer } from "./styles";

// https://viacep.com.br/ws/01310930/json

interface CepData {
  bairro: string;
  uf: string;
  localidade: string;
  logradouro: string;
  complemento: string;
}

export function CepInput() {
  const [cep, setCep] = useState("");
  const [cepData, setCepData] = useState<CepData | null>(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    e.target.maxLength = 9;
    e.target.value = e.target.value.replace(/\D/g, "");
    e.target.value = e.target.value.replace(/^(\d{5})(\d)/g, "$1-$2");

    setCep(e.target.value);
  }

  function showSearchError(message: string) {
    toast.error(message, {
      position: "top-right",
      theme: "colored",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setLoading(false);
    setCepData(null);
    return;
  }

  async function handleSearchCep() {
    setLoading(true);

    try {
      if (!cep) {
        throw new Error("CEP não informado.");
      }

      if (cep.length !== 9) {
        throw new Error("CEP inválido.");
      }

      const cepFomated = cep.replace("-", "");
      const cepData = await getCepData(cepFomated);
      setLoading(false);

      if (!cepData) {
        throw new Error("CEP inválido.");
      }

      setCepData(cepData);
    } catch (error: any) {
      showSearchError(error.message);
    }
  }

  function renderCepData(cepData: CepData | null) {
    if (!cepData) {
      return null;
    }

    const { bairro, localidade, uf, logradouro, complemento } = cepData;

    return (
      <CepData>
        <strong>
          {localidade} - {uf}
        </strong>
        <strong>
          Bairro: <span>{bairro}</span>
        </strong>

        <strong>
          Rua: <span>{logradouro}</span>
        </strong>

        {complemento !== "" ? (
          <strong>
            Complemento: <span>{complemento}</span>
          </strong>
        ) : null}
      </CepData>
    );
  }

  return (
    <Container>
      <InputContainer>
        <label htmlFor="CEP">
          <input
            type="text"
            name="CEP"
            id="CEP"
            placeholder="CEP xxxxx-xxx"
            value={cep}
            onChange={handleChange}
          />
        </label>
        <button className="cep_button" type="button" onClick={handleSearchCep}>
          Buscar
          {loading ? (
            <Loader type="ThreeDots" color="#FFF" height={10} width={10} />
          ) : null}
        </button>
      </InputContainer>

      {renderCepData(cepData)}
    </Container>
  );
}
