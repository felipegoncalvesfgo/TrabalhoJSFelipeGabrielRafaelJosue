// Pedidos fictícios para iniciar os testes. Novos pedidos devem ser adicionados a este array.
let pedidos = [
    { codigo: 101, cliente: "Ana", valor: 25.50, entregue: false },
    { codigo: 102, cliente: "Bruno", valor: 18.00, entregue: true },
    { codigo: 103, cliente: "Carla", valor: 32.90, entregue: false }
];

// Implemente abaixo as operações de gerenciamento dos pedidos.
function cadastrarPedido() {
    // TODO: solicitar os dados, validar e adicionar um novo pedido ao array.
    //Solicitação de Dados
    
    let novo_pedido = {}
    let cliente_add = prompt("Digite o nome do Cliente")
    let valor_add = Number(prompt("Digite o valor do pedido"))
    let entregue_add = prompt("Pedido entregue? S/N?")

    //Validação
    if(valor_add < 0){
        console.log("Valor digitado não está no padrão")
        if(entregue_add != 0 || entregue_add != 1){
        console.log("Opção digitada não está no padrão")
    }else{
    //Adicionando ao array
        novo_pedido = {codigo: pedidos.codigo-1, cliente: cliente_add, valor: valor_add, entregue: entregue_add}
        pedidos = novo_pedido
    }
    }
    }
    console.log(pedidos)
    


function listarPedidos() {
    // TODO: listar os pedidos cadastrados.
}

function buscarPedido(codigo) {
    // TODO: retornar o pedido correspondente ao código, se existir.
}

function entregarPedido(codigo) {
    // TODO: alterar a situação de entrega do pedido encontrado.
}
