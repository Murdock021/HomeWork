'use strict';

function BinarioADecimal(num) {
  let decimal = 0;
  let potencia = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    decimal += num[i] * Math.pow(2, potencia);
    potencia++;
  }
  return decimal;

}

/*  num = num.split('')
var suma = 0 ;
for (var i = 0; i < array.length; i++) {
  suma = suma + Math.pow (2, num.length-1-i)* num[i]
}
return suma; */

/* num = num.split('').reverse()
var suma = 0;
for (var i = 0; i < num.length; i++) {
  suma += num[i]*2**i
}
return suma; */

function DecimalABinario(num) {
 var binario = []
 
 while (num !==0 ){
  binario.unshift(num % 2)
  num = Math.floor(num/2)
  }
  return binario.join('');
}

/* let binario = "";
while (num > 0) {
  binario = (num % 2) + binario;
  num = Math.floor(num / 2);
} 
return binario;*/

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
