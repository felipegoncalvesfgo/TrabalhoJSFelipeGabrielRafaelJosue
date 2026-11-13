// Pedidos fictícios para iniciar os testes. Novos pedidos devem ser adicionados a este array.
let pedidos = [
    { codigo: 101, cliente: "Ana", valor: 25.50, entregue: false },
    { codigo: 102, cliente: "Bruno", valor: 18.00, entregue: true },
    { codigo: 103, cliente: "Carla", valor: 32.90, entregue: false }
];

for(let pedido of pedidos){
    console.log(pedido.codigo)
}

// Implemente abaixo as operações de gerenciamento dos pedidos.
export function cadastrarPedido() {
    // TODO: solicitar os dados, validar e adicionar um novo pedido ao array.
    //Solicitação de Dados
    
    console.log("Cadastro de pedido Iniciado")

    let novo_pedido = []
    let cliente_add = prompt("Digite o nome do Cliente")
    let valor_add = Number(prompt("Digite o valor do pedido"))
    let entregue_add = prompt("Pedido entregue? S/N?")

    //Validação
    if(valor_add < 0){
        console.log("Valor digitado não está no padrão")
    }
        if(entregue_add.toUpperCase() != "S" && entregue_add.toUpperCase() != "N"){
        console.log("Opção digitada não está no padrão")
    }else{
    //Adicionando ao array
    if(entregue_add.toUpperCase() === "S"){
        entregue_add = true
    }else{entregue_add = false}
        novo_pedido = {codigo: pedidos[pedidos.length-1].codigo+1, cliente: cliente_add, valor: valor_add, entregue: entregue_add}
        pedidos.push(novo_pedido)
        
    }
    console.log(novo_pedido)
    }
    
    console.log(pedidos)
    


export function listarPedidos() {
    // TODO: listar os pedidos cadastrados.
    console.log("Listagem de pedido Iniciado")
    for(let pedido of pedidos){
        console.log(pedido)
    }
}

function buscarPedido(codigo, pedido) {
export function buscarPedido(codigo) {
    // TODO: retornar o pedido correspondente ao código, se existir.
    let pedido_selecionado = prompt("Digite o código do pedido: ")
    for(pedido of pedidos){

    console.log("Buscar pedido Iniciado")
    for(let pedido of pedidos){
        if(pedido.codigo == codigo){
            console.log(pedido)
        }
    }
}

export function entregarPedido(codigo) {
    // TODO: alterar a situação de entrega do pedido encontrado.
   //teste let pedido_selecionado2 = prompt("Digite o código do pedido")
   console.log("Entrega de pedido Iniciado")
    for(pedido of pedidos){
        if(pedido.codigo === codigo){
            pedido.entregue = true
        }
    }
}
