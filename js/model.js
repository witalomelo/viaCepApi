//classe que mantem uma lista de observadores
class CepModel {
    async consultarCEP(cep) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Erro ao consultar CEP:", error);
        }
    }
}