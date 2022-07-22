const calcular = document.getElementById('calcular');

function imc() {
    
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    const calc = (peso / (altura * altura));
    

if(altura!=='' && peso!==''){

    const nome = document.getElementById('nome').value;
    const calc = (peso / (altura * altura));

 

let tabela = '';
    if (calc <18.5){
        tabela = 'magreza excessiva.';
    } else if(calc < 25){
        tabela = 'normalidade.';
    } else if (calc < 30){
        tabela = 'sobrepeso.'
    } else if (calc <35){
        tabela = 'obesidade grau I.'
    } else if (calc <40){
        tabela = 'obesidade grau II'
    } else {
        tabela = 'obesidade mórbida;'
    }
 
    resultado.innerHTML = `${nome}, o seu IMC é ${calc} e isto indica ${tabela}`;

}else{
    resultado.innerHTML = 'Preencha todos os campos';
}

}



