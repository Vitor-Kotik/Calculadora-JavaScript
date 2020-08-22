function conta() {
	var operacoes = document.getElementById('operacoes').value;
		operacoes = Number(operacoes);
	var num1 = document.getElementById('valor1').value;
		num1 = Number(num1);
	var num2 = document.getElementById('valor2').value;
		num2 = Number(num2);

	if(num1 == null || num1 == '') {
		alert('Digite um número válido');
		return false;
	}
	if(num2 == null || num2 == '') {
		alert('Digite um número válido');
		return false;
	}

	resultado = null;

	switch(operacoes) {
		case 1: //Adição
			resultado = num1 + num2;
			break;

		case 2: //Subtração
			resultado = num1 - num2;
			break;

		case 3: //Multiplicação
			resultado = num1 * num2;
			break;

		case 4: //Divisão
			resultado = num1 / num2;
			break;

		default:
			alert('Por favor, escolha uma operação.');
			return false;
	}
	document.getElementById('resultadoFinal').value = resultado;
}

function executaFuncao(event){
	var tecla = event.key;
	if(tecla == 'Enter') {
		conta();
	}
}