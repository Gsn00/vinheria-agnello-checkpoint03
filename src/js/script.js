function vinho(nome, tipo, safra, estoque) {
    this.nome = nome;
    this.tipo = tipo;
    this.safra = safra;
    this.estoque = estoque;
}

//Pré cadastrando vinhos...
let v1 = new vinho("Château Margaux", "Tinto", 2015, 3);
let v2 = new vinho("Opus One", "Tinto", 2018, 5);
let v3 = new vinho("Sassicaia", "Tinto", 2016, 8);
let v4 = new vinho("Cloudy Bay Sauvignon Blanc", "Branco", 2022, 12);
let v5 = new vinho("Veuve Clicquot Brut Yellow Label", "Espumante", 2002, 2);

var vinhos = [v1, v2, v3, v4, v5];

function criarPromptValido(texto) {
    let valor = prompt(texto);
    while(valor == null || valor.trim() == "") {
        valor = prompt(texto);
    }
    return valor;
}

function cadastrarVinho() {
    let nome = criarPromptValido('Digite o nome do vinho');
    let tipo = criarPromptValido('Digite o tipo do vinho');
    let safra = parseInt(criarPromptValido('Digite a safra do vinho'));
    let estoque = parseInt(criarPromptValido('Quantidade em estoque'));

    let newVinho = new vinho(nome, tipo, safra, estoque);
    vinhos.push(newVinho);
    
    alert("Cadastrado com sucesso!\nNome: "+nome+"\nTipo: "+tipo+"\nSafra: "+safra+"\nEstoque: "+estoque);
}

//Calculando estoque total com reduce:
function calcularEstoqueTotal() {
    return vinhos.reduce((total, elemento) => total + elemento.estoque, 0);
}
//Usando map para deixar os nomes em caixa alta:
function reescreverNomesEmCaixaAlta() {
    vinhos = vinhos.map(v => { v.nome = v.nome.toUpperCase(); return v; });
}

//Mostrando vinhos com estoque baixo com filter:
function retornarVinhosComEstoqueBaixo() {
    return vinhos.filter((v) => v.estoque < 5);
}

function exibirTodosOsVinhos() {
    let quantidadeVinhos = vinhos.length;

    console.log("------[ DETALHES ] ------");
    console.log("Vinhos cadastrados: "+quantidadeVinhos);
    console.log("Estoque total: "+calcularEstoqueTotal());
    console.log("------[ DETALHES ] ------");
    console.log(""); //Espacamento
  
    reescreverNomesEmCaixaAlta();

    //Listando todos os vinhos com forEach:
    vinhos.forEach(v => {
        let indice = vinhos.indexOf(v) + 1;
        console.log("------[ Vinho "+indice+" ] ------");
        console.log("Nome: "+v.nome);
        console.log("Tipo: "+v.tipo);
        console.log("Safra: "+v.safra);
        console.log("Estoque: "+v.estoque);
        console.log(""); //Espacamento
    });

    if (retornarVinhosComEstoqueBaixo().length > 0) {
        console.log("---[ VINHOS COM ESTOQUE BAIXO ]---");
        
        retornarVinhosComEstoqueBaixo().forEach(v => {
            console.log(" -> " + v.nome);
        });
    }
}

while(true) {
    cadastrarVinho();
    if (confirm("Deseja cadastrar outro vinho?") == false) {
        let quantidade = vinhos.length;
        alert("Você cadastrou " + quantidade + " vinhos.\nVeja os detalhes no console.");
        exibirTodosOsVinhos();
        break;
    }
}