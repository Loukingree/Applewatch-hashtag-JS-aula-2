//Objetos
const verdeCipreste = {
    name: "Verde-cipreste",
    folder: "imagens-verde-cipreste"
}

const azulInverno = {
    name: "Azul-inverno",
    folder: "imagens-azul-inverno"
}

const meiaNoite = { 
    name: "Meia-noite",
    folder: "imagens-meia-noite"
    //para acessar: meiaNoite.pasta, meiaNoite.nome
}

const estelar ={
    name: "Estelar",
    folder: "imagens-estelar"
}

const rosaClaro = {
    name: "Rosa-claro",
    folder: "imagens-rosa-claro"
}



//Lista ou Array (Vetor ou Matriz)
const opcoesCores = [ 
verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro
    //ex. opcoesCores[0] é verdeCipreste, opcoesCores[i]: Na computacao sempre comecamos a contagem  a partir do 0. Isso tmb vale para indices. 
];

const opcoesTamanho = ["41 mm", "45 mm"];



//VAR GLOBAIS
const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada");
const miniaturaImagem0 = document.getElementById("0-imagem-miniatura");
const miniaturaImagem1 = document.getElementById("1-imagem-miniatura");
const miniaturaImagem2 = document.getElementById("2-imagem-miniatura");

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;



//FUNCOES
function trocarImagem() {
    const idOpcaoSelecionada = document.querySelector("[name = 'opcao-imagem']: checked").id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].folder + "./imagem-" + imagemSelecionada + ".jpeg"; 
}

function trocarTamanho() {
    //atualizar variavel de controle do tamanho da caixa
    const idOpcaoSelecionada = document.querySelector("[name='opcao-tamano']:checked").id.charAt[0];
    tamanhoSelecionado = idOpcaoSelecionada;
    //mudar o titulo do produto
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].name +  " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    //mudar o tamanho da imagem
    if (opcoesTamanho[tamanhoSelecionado] === "41 mm") { 
    imagemVisualizacao.classList.add("caixa-pequena");
    } else {
        imagemVisualizacao.classList.remove("caixa-pequena");
        }
}

function trocarCor() {
    //atualizar cor selecionada
    const idOpcaoSelecionada = document.querySelector("[name='opcao-cor']:checked").id.charAt(0);
    corSelecionada = idOpcaoSelecionada;
    //trocar titulo da pagina
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].name +  " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    //trocar nome da cor
    nomeCor.innerText = "Cor - " + opcoesCores[corSelecionada].name;
    //trocar imagens das miniaturas exibidas
    miniaturaImagem0.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].folder + "/imagem-0.jpeg";
    miniaturaImagem1.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].folder + "/imagem-1.jpeg";
    miniaturaImagem2.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].folder + "/imagem-2.jpeg";
    //trocar imagem de visualizacao
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].folder + "./imagem-" + imagemSelecionada + ".jpeg";
}