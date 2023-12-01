/*Desafio Técnico 1

Descrição:

- Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

Exemplos:

- Caso sua função receba o inteiro 10, ela deve retornar 23, resultante do somatório dos números 3, 5, 6 e 9 que são menores que 10.

- Caso sua função receba o inteiro 11, ela deve retornar 33, resultante do somatório dos números 3, 5, 6, 9 e 10 que são menores que 11.

Instruções:

- Sua função deve ser implementada em Dart ou em Javascript. - Sua implementação deve estar em um repositório público no Github.

- Escreva um README no seu repositório com as instruções de como rodar o seu projeto e como podemos testá-lo.

Prazo: 72 horas

Envie sua resposta para o email jobs@escribo.com com o link do repositório.
*/

function somatorioDivisiveis(numero) {
  let soma = 0;

  for (let i = 1; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }

  return soma;
}

function calcularSomatorio() {
  const numeroInput = document.getElementById('numeroInput');
  const resultadoElement = document.getElementById('resultado');

  const numero = parseInt(numeroInput.value);

  if (isNaN(numero) || numero <= 0) {
    resultadoElement.textContent = 'Insira um número inteiro positivo válido.';
    return;
  }

  const somatorio = somatorioDivisiveis(numero);
  resultadoElement.textContent = `Soma dos números divisíveis por 3 ou 5 menores que ${numero} é: ${somatorio}`;
}

function limpar() {
  document.getElementById('numeroInput').value = '';
  document.getElementById('resultado').textContent = '';
}

