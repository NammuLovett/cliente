/* [ PRACTICA ]

Vamos a mejorar el cifrado anterior en el que cada letra siempre se va a corresponder con
la misma letra cifrada (lo que facilita su descifrado).
Por ello, en lugar de pedir un número que se sume a cada carácter pediremos un grupo
de cifras, de tal modo que cada cifra se sumará en orden a la cadena que queremos
cifrar. Veámoslo con un ejemplo:
Texto: “Hola caracola”
Clave: 22345
El cifrado consistirá en aplicar de forma cíclica en una tabla Unicode el siguiente cálculo:
H+2, o+2, l+3, a+4, “ “+5, c+2, a+2, r+3, a+4, c+5, o+2, l+2, a+3
Resultando: Jqoe%ecuehqnd

A tener en cuenta:
➢ El resultado se mostrará usando el método document.write()
➢ El código JavaScript se puede hacer inscrito en el mismo documento.

Funcionamiento:
✓ La clave introducida por el usuario debe ser un número válido que no sea inferior a 1
ni superior a (por ejemplo) 1000000.
✓ El programa pedirá al usuario la clave hasta que sea un número válido o bien hasta
que pulse Cancelar.
✓ Acto seguido el usuario introduce el texto a cifrar.
✓ En ningún caso se admitiría una cadena vacía (pulsar Aceptar sin introducir nada).
Recuerda que JavaScript asume que la cadena vacía es false.
Salida:
✓ El sistema avisará al usuario de la cancelación de la aplicación.
✓ El sistema dará al usuario la cadena cifrada tanto por pantalla como por caja de
diálogo.
template-literal !!
*/
/* El cifrado César consiste en tomar cada letra de un mensaje y desplazarla en el alfabeto el número que diga una clave. Por ejemplo, la letra A desplazada con clave 2, se convertirá en C. Aunque el cifrado César funciona con un alfabeto completo y por desplazamiento (en el ejemplo anterior la letra Z se suele convertir en B) se pide crear una página que pida al usuario un texto y una clave y escriba el mismo texto, pero desplazando los caracteres en la tabla Unicode el número que indique la clave. */
let key = 0;
let frase = '';

let pswd = '';
let suma = 0;

while (isNaN(key) || key < 1 || key > 1000000) {
  key = prompt('Escribe la clave de cifrado entre 1-100000');
}
while (frase.valueOf() == '') {
  frase = prompt('Escribe lo que quiere cifrar');
}

let j = 0;

for (i = 0; i < frase.length; i++) {
  //En este for lo que hacemos es crear la frase sumando el valor que nos ha dado en su caracter unicode
  //frase.charCodeAt(i) = parseInt(frase.charCodeAt(i)) + parseInt(num);

  //console.log(frase.charCodeAt(i));
  //console.log(parseInt(frase.charCodeAt(i)) + parseInt(key));

  pswd += String.fromCharCode(frase.charCodeAt(i) + parseInt(key.charAt(j)));
  j++;
  if (j == key.length) {
    j = 0;
  }
  //pswd = String.fromCharCode(pswd);
}

//console.log(frase);

document.write(`<h2>La nueva contraseña es ${pswd}<h2/>`);
