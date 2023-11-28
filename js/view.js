//implemente o metodo exibir resultado
class CepView {
    exibirResultado(resultado) {
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `<p>CEP: ${resultado.cep}</p>
                                  <p>Logradouro: ${resultado.logradouro}</p>
                                  <p>Bairro: ${resultado.bairro}</p>
                                  <p>Cidade: ${resultado.localidade}</p>
                                  <p>Estado: ${resultado.uf}</p>`;
    }
}