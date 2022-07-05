//Arrey de "produto"s, irá conter todos os produtos que forem adicionados ao carrinho e irá fornecer o custo total da compra.
let listaDeCompras =[];
//Limite do número de produtos que podem caber na lista de compras.
const limiteDeCompras = 10;
//Valor numerico do custo total até o momento
let custoTotal = Number(0);

function adicionarProduto(nomeProduto, custoProduto)
{
    if(listaDeCompras.length < limiteDeCompras){
        let produto = {nome: 'Nome_Produto', custo: '0'}
    produto.nome = nomeProduto;
    produto.custo = custoProduto;
    listaDeCompras.push(produto);
    //console.log("Produto: "+produto.nome+"/Custo: "+produto.custo+" foi adicionado a lista de compras");
    //console.log("A lista de compras agora tem "+listaDeCompras.length+"/10 vagas");
    custoTotal += Number(produto.custo);
    //console.log("O valor da compra agora é "+custoTotal);

    }
    else{
        console.log("Carrinho já esta cheio");
    }  


}

function informarUmProdutoDaLista(i_){
    return "/"+listaDeCompras[i_].nome +" . . . "+listaDeCompras[i_].custo+"/ ";
}

function listaDeComprasLength()
{
    let lDCL = listaDeCompras.length;
    return lDCL;
}

function custoTotalInfo()
{
       return Number(custoTotal);
}

function limparCarrinho(){
    var loops = listaDeCompras.length;
    var i = 0;
    do{
        listaDeCompras.pop();
        i++;
    }
    while(i<loops){

    }
    //console.log("Lista de compras tem "+listaDeCompras.length+" itens");
    custoTotal = Number("0");
}








