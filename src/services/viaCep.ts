export async function getCepData(cep: string) {
  try {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    const data = await res.json();

    if (data.erro) {
      return;
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}
