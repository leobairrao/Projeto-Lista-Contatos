const form = document.getElementById('form-contato')
const tbody = document.querySelector('tbody')
const numeroContatos = document.getElementById('numero-contatos');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const nomeInput = document.getElementById('nome-contato')
    const telefoneInput = document.getElementById('telefone-contato')

    adicionaContato(nomeInput.value , telefoneInput.value);
    atualizaTabela();
})

function adicionaContato(nome, telefone) {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `<td>${nome}</td><td>${telefone}</td>`;
    tbody.appendChild(novaLinha);

    atualizaNumeroContatos();
}

function atualizaTabela(){
    form.reset();
}

function atualizaNumeroContatos() {
    const totalContatos = tbody.getElementsByTagName('tr').length;
    numeroContatos.textContent = totalContatos;
}