// tests/app.test.js

// Função que será testada
function soma(a, b) {
  return a + b;
}

// Teste que verifica a função soma
test('Adicionar dois números', () => {
  // Verifica se a soma de 1 + 1 é igual a 2
  expect(soma(1, 1)).toBe(2);
});

test('Adicionar números negativos', () => {
  // Verifica se a soma de -1 + -1 é igual a -2
  expect(soma(-1, -1)).toBe(-2);
});

test('Adicionar números com zero', () => {
  // Verifica se a soma de 0 + 5 é igual a 5
  expect(soma(0, 5)).toBe(5);
});

// Teste com números decimais
test('Adicionar números decimais', () => {
  // Verifica se a soma de 0.1 + 0.2 é igual a 0.3
  expect(soma(0.1, 0.2)).toBeCloseTo(0.3);
});
