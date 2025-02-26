import { valida } from './validacao.js';

// Configuração da máscara monetária
const optionsBRL = {
    prefix: 'R$ ',
    suffix: '',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.',
    cursor: 'end'
};

// Aplicar a máscara ao campo de preço
const precoInput = document.getElementById('preco');
SimpleMaskMoney.setMask(precoInput, optionsBRL);

// Aplicar validações a todos os campos
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target);
    });
});