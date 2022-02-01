   
   /*
**  Incluir nova requisição POST para localhost que será utilizada para incluir os utils
**  Incluir na área de Pre-request Script, o script abaixo:
*/
   
    function cpf() {
        const geraNumeroRandomico = (n) => Math.round(Math.random() * n);
        const mod = (base, div) => Math.round(base - Math.floor(base / div) * div)
        const digitosDocumento = Array(9).fill('').map(() => geraNumeroRandomico(9));

        let digitoVerificador01 = digitosDocumento.reduce((total, number, index) => (total + (number * (10 - index))), 0)
        digitoVerificador01 = 11 - mod(digitoVerificador01, 11);
        if (digitoVerificador01 >= 10) digitoVerificador01 = 0;
        
        let digitoVerificador02 = (digitoVerificador01 * 2) + digitosDocumento.reduce((total, number, index) => (total + (number * (11 - index))), 0)
        digitoVerificador02 = 11 - mod(digitoVerificador02, 11);
        if (digitoVerificador02 >= 10) digitoVerificador02 = 0;

        return `${digitosDocumento.join('')}${digitoVerificador01}${digitoVerificador02}`
    }
     function cnpj() {
        const geraNumeroRandomico = (n) => Math.round(Math.random() * n);
        const mod = (base, div) => Math.round(base - Math.floor(base / div) * div)
        const digitosDocumento = Array(12).fill('').map(() => geraNumeroRandomico(9));

        let digitoVerificador01 = 
            (digitosDocumento[0]*5) + 
            (digitosDocumento[1]*4) + 
            (digitosDocumento[2]*3) +
            (digitosDocumento[3]*2) +
            (digitosDocumento[4]*9) +
            (digitosDocumento[5]*8) +
            (digitosDocumento[6]*7) +
            (digitosDocumento[7]*6) +
            (digitosDocumento[8]*5) +
            (digitosDocumento[9]*4) +
            (digitosDocumento[10]*3) +
            (digitosDocumento[11]*2);
        
        digitoVerificador01 = 11 - ( mod(digitoVerificador01,11) ); 
        if (digitoVerificador01>=10) digitoVerificador01 = 0; 

        let digitoVerificador02 = 
        (digitosDocumento[0]*6) + 
        (digitosDocumento[1]*5) + 
        (digitosDocumento[2]*4) +
        (digitosDocumento[3]*3) +
        (digitosDocumento[4]*2) +
        (digitosDocumento[5]*9) +
        (digitosDocumento[6]*8) +
        (digitosDocumento[7]*7) +
        (digitosDocumento[8]*6) +
        (digitosDocumento[9]*5) +
        (digitosDocumento[10]*4) +
        (digitosDocumento[11]*3) +
        (digitoVerificador01*2);

        digitoVerificador02 = 11 - ( mod(digitoVerificador02,11) ); 
        if (digitoVerificador02>=10) digitoVerificador02 = 0; 

        return `${digitosDocumento.join('')}${digitoVerificador01}${digitoVerificador02}`
    }

// Incluir aqui quais variáveis devem ser geradas caso desejado...
    pm.environment.set('cpf', cpf());
    pm.environment.set('cnpj', cnpj());
