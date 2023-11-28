class CepController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    async consultarCEP() {
        const cepInput = document.getElementById("cepInput");
        const cep = cepInput.value.replace(/\D/g, '');

        if (cep.length === 8) {
            const resultado = await this.model.consultarCEP(cep);
            this.view.exibirResultado(resultado);
        } else {
            alert("Por favor, insira um CEP válido com 8 dígitos.");
        }
    }
}

function consultarCEP() {
    const model = new CepModel();
    const view = new CepView();
    const controller = new CepController(model, view);

    controller.consultarCEP();
}