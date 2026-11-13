// Trabalho NP2 — fluxo principal.
// Utilize as funções de pedidos.js e relatorios.js neste arquivo.


function iniciarSistema() {
    let opcao = -1;
    let codigo;
    const opcoes = [0,1,2,3,4,5,6];
    
    while(!opcoes.includes(opcao)){
        opcao = Number(prompt("Opções: 1 cadastrar; 2 listar; 3 buscar; 4 entregar;5 resumo; 6 resumo em JSON; 0 sair."));

        switch(opcao){
            case 1:
                cadastrarPedido();
                break
            case 2:
                listarPedidos();
                break
            case 3:
                codigo = (prompt("digite o código do pedido:"));
                buscarPedido(codigo);
                break
            case 4:
                codigo = prompt("digite o código do pedido:");
                entregarPedido(codigo);
                break
            case 5:
                exibirResumo();
                break
            case 6:
                gerarResumoJSON();
                break
            case 0:
                break
        }
    }


    // TODO: implementar o menu usando prompt(), estruturas de repetição,
    // condicionais e chamadas às funções dos outros arquivos JavaScript.
    // Opções: 1 cadastrar; 2 listar; 3 buscar; 4 entregar;
    // 5 resumo; 6 resumo em JSON; 0 sair.
}

iniciarSistema();

// TODO: chamar iniciarSistema() quando a implementação estiver pronta.
