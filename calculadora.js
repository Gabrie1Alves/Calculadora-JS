var conta = [];
var indice = 0;
var simb = '+-*/=';
var aux = 0;
var point = 0;
function calculadora(valor){
    var resultado = 0;
    var firstNum = 0;
    var secondNum = 0;
    var action;
    if(indice == 0){
        if(simb.includes(valor) || valor == '.'){
            return;
        }
    }
    if(valor === '.'){
        if(indice == 0 || point != 0 || simb.includes(conta[indice-1])){
            return;
        }else{
            point++;
        }
    }
    if(indice > 0){
        if(simb.includes(valor)){
            if( simb.includes(conta[indice-1])){
                conta.pop();
                conta.push(valor);
                $('.tela').html(conta);
                return;
            }else if(valor === '=' && aux === 0){
                return;
            }else{
                aux ++;
                point = 0;
            }
        }
    }
    if(conta[indice-1] === '/' && valor == '0'){
        return;
    }
    if(valor === '=' && simb.includes(conta[indice])){
        return;
    }
    conta.push(valor);
    if(aux == 2){
        var sair = 0;
        var i = 0;
        while(sair < 2){
            if(sair === 0){ //primeiro numero
                if(!simb.includes(conta[i])){
                    firstNum = firstNum + conta[i];
                    i++;
                }
                if(simb.includes(conta[i])){
                    sair++;
                    action = conta[i];
                    i++;
                }
            }else{ // segundo numero
                
                if(!simb.includes(conta[i])){
                    secondNum = secondNum + conta[i];
                    i++;
                }
                if(simb.includes(conta[i])){
                    sair = 10;
                }
            }
        }
        aux = 1;
        conta = [];
        if(action == '+'){
            conta.push(parseFloat(firstNum)+parseFloat(secondNum));
        }else if(action == '-'){
            conta.push(parseFloat(firstNum)-parseFloat(secondNum));
        }else if(action == '/'){
            conta.push(parseFloat(firstNum)/parseFloat(secondNum));
        }else {
            conta.push(parseFloat(firstNum)*parseFloat(secondNum));
        }
        if(valor === '='){
            aux = 0;
        }else{
            conta.push(valor);
        }
        indice = conta.length;
    }

    indice ++;
    if(valor === '='){
        $('.tela').html(conta);
        conta = [];
        return;
    }
    $('.tela').html(conta);
}