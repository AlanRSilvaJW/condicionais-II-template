/*
const idadeDependende = Number (prompt('Solicitação de Dependente \n Qual a idade do Dependente?'))

if(idadeDependente >= 13){
    if(idadeDependende < 18){
        console.log('Seu Dependente já pode ter um cartão vinculado ao seu')
    }else{
        console.log('O Dependente já pode ter o seu cartão!')
    }
}else{
    console.log('Consulte outras possibilidades')
}
*?

/*
if(idadeDependende >= 13 && idadeDependende <= 17){
    console.log('Seu Dependente já pode ter um cartão vinculado ao seu')
    }elseif{(idadeDependende <= 17)
    console.log('O Dependente já pode ter o seu cartão!')
}else{
    console.log('Consulte outras possibilidades')
}
*/

/*
idadeDependende === 13 ? console.log('A idade do Dependente é 13 e ele já pode ter um cartão') : console.log('Consulte outras opções')
*/


/*
const escolhaCartao = Number (prompt('Solicitação de Cartão de Crédito \n Digite a opção desejada: \n 1 - Facil \n 2 - Black \n 3 - Platinum \n 4 - MasterGold'))

switch(escolhaCartao){
    case 1:
        console.log('Cartão Fácil adquirido')
        break

    case 2:
        console.log('Cartão Black adquirido')
        break

    case 3:
        console.log('Cartão Platinum adquirido')
        break

    case 4:
        console.log('Cartão MasterGold adquirido')    
        break

}
*/

const numero = Number (prompt("Digite um número para verifcar"))
if(numero % 2 === 0 && numero % 3 === 0){

    console.log('O número é divisível por 2 e 3')

}