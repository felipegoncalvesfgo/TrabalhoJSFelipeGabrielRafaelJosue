// Trabalho NP2 — funções de relatórios.
// Os pedidos estão armazenados no array 'pedidos', definido em pedidos.js.

export function exibirResumo() {
    // TODO: calcular e exibir total de pedidos, entregues, pendentes e valor total.
    let pedidosEntregues = 0
    let pedidosPendentes = 0

    //Total pedidos
    totalPedidos = (pedidosEntregues + pedidosPendentes)

    //Pedidos entregues ou Pendentes
    if (entregues_add == S){
        pedidosEntregues++
    } else{
        pedidosPendentes++
    }

    //Valor total
    for (pedido of pedidos){
        valores = pedido[valor]
    }
    valorTotal += valores

}

export function gerarResumoJSON() {
    // TODO: criar o objeto do resumo, converter com JSON.stringify() e exibir.

    let resumo = {
        pedidos: totalPedidos,
        entregues: pedidosEntregues,
        pendentes: pedidosPendentes,
        total: valorTotal,
    }

    //Exibir
    console.log(gerarResumoJSON)

    //JSON

    JSON.stringify(resumo)

}
