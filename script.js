let valor = 0;
let html;
let opcao;

function clicado() {
    if(valor == 0 ) {
        document.querySelector('#collapse').className="content visivel opacidade";
        valor = 1;
        return valor;
    }else if(valor == 1) {
        document.querySelector('#collapse').className="oculto";
        valor = 0;
        return valor;
    }
}

function hover(num) {
    if(num == 0 || num == 2 ) {
        document.querySelector('#navegação').className="barra-navegação opacidade";
        if(valor == 0) {
            document.querySelector('#collapse').className="oculto";
        }else if(valor == 1) {
            document.querySelector('#collapse').className="content visivel opacidade";
        }
    }   else if(num == 1 || num == 3) {
            document.querySelector('#navegação').className="barra-navegação";
            if(valor == 0) {
                document.querySelector('#collapse').className="oculto";
            }else if(valor == 1) {
                document.querySelector('#collapse').className="content visivel";
            }
        }
}

function cardapio(num) {
    switch(num) {
        case 1:
            html = `<h1>Frango<span>R$ 35,90</span></h1>
            <p>Catupiry, Frango e Tomate</p>
            
            <h1>Calabresa<span>R$ 30,90</span></h1>
            <p>Muçarela, Calabresa, Cebola e Tomate</p>
            
            <h1>4 Queijos<span>R$ 32,90</span></h1>
            <p>Muçarela, Provolone, Catupiry e Gorgonzola</p>
            
            <h1>Filet Mignon<span>R$ 42,90</span></h1>
            <p>Muçarela, Filet e Cebola</p>
            
            <h1>Portuguesa<span>R$ 34,90</span></h1>
            <p>Muçarela, Polpa de Tomate, Cebola e Azeitonas</p>
            
            <h1>Napolitana<span>R$ 30,90</span></h1>
            <p>Muçarela, Manjericão e Tomate</p>`;

            opcao = document.querySelector('#conteudo-cardapio');
            opcao.innerHTML= html;

            document.querySelector('#btn1').className = 'cardápio-botão active';
            document.querySelector('#btn2').className = 'cardápio-botão';
            document.querySelector('#btn3').className = 'cardápio-botão';

            break;

        case 2:
            html = `<h1>Brigadeiro <span>R$ 38,90</span></h1>
            <p>Chocolate ao Leite, Chocolate Granulado e Muçarela</p>
            
            <h1>Goiabada<span>R$ 35,90</span></h1>
            <p>Goiabada e Muçarela</p>
            
            <h1>Banana C/canela <span>R$ 38,90</span></h1>
            <p>Banana, Canela, Açúcar e Muçarela</p>
            
            <h1>Bombom<span>R$ 39,90</span></h1>
            <p>Bombom, Leite Condensado e Muçarela</p>
            
            <h1>Chocolate branco <span>R$ 37,90</span></h1>
            <p>Chocolate Branco e Muçarela</p>
            
            <h1>Califórnia <span>R$ 39,90</span></h1>
            <p>Abacaxi, Figo, Pêssego e Muçarelaa</p>`;

            opcao = document.querySelector('#conteudo-cardapio');
            opcao.innerHTML= html;

            document.querySelector('#btn2').className = 'cardápio-botão active';
            document.querySelector('#btn1').className = 'cardápio-botão';
            document.querySelector('#btn3').className = 'cardápio-botão';

            break;

        case 3:
            html = `<h1>Lasagna Bolonhesa<span>R$ 45,90</span></h1>
            <p>Molho Vermelho, Carne Moída, Muçarela e Presunto</p>
            
            <h1>Lasanha de Frango<span>R$ 40,90</span></h1>
            <p>Frango, Molho de Tomate, Milho e Cenouras</p>
            
            <h1>Lasanha de Brócolis<span>R$ 37,90</span></h1>
            <p>Molho Branco, Brócolis e Bacon</p>
            
            <h1>Massa a Carbonara<span>R$ 46,90</span></h1>
            <p>Bacon, Ovo, Creme de Leite e Queijo Parmesão</p>
            
            <h1>Massa a Bolonhesa<span>R$ 41,90</span></h1>
            <p>Molho de Tomate, Carne Moída, Manjerição e Cebola</p>
            
            <h1>Massa Alho e Óleo<span>R$ 36,90</span></h1>
            <p>Alho, Manteiga e Pimenta</p>`;

            opcao = document.querySelector('#conteudo-cardapio');
            opcao.innerHTML= html;

            document.querySelector('#btn3').className = 'cardápio-botão active';
            document.querySelector('#btn2').className = 'cardápio-botão';
            document.querySelector('#btn1').className = 'cardápio-botão';

            break;

        default:
            break;
    }
}