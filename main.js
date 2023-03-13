const agenda = document.getElementById('formulario');
const tabela = document.getElementById('tabela');
let linhas = '';
formulario.addEventListener('submit', function(e) {
    e.preventDefault();


    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
    
});







