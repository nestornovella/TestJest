const {string,
    integer,
    float,
    boolean,
    operacion1,
    operacion2,
    operacion3,
    operacion4,
    esPar,
    esMasGrande,
    esMayorDeEdad,
    esDivisiblePorTres,
    esDivisiblePorTresYnueve,
    esVocal,
    tieneTresCifras,
    sumarNumeros,
    cuentaLetras,
    saluda,
    redondea,
    redondeaPorMayor,
    redondeaPorMenor,
    espejo} = require('../Practicas/modulo1.js');




describe('string', () => {
    test('remplaza null por un string', () => {
      expect(typeof string()).toBe('string');
    });
  });
  
  describe('integer', () => {
    test('remplaza null por un integer', () => {
      expect(Number.isInteger(integer())).toBe(true);
    });
  });
  
  describe('float', () => {
    test('remplaza null por un float', () => {
      expect(typeof float()).toBe('number');
      expect(Number.isFinite(float())).toBe(true);
    });
  });
  
  describe('boolean', () => {
    test('remplaza null por un booleano', () => {
      expect(typeof boolean()).toBe('boolean');
    });
  });
  
  describe('operacion1', () => {
    test('remplaza null por un entero tal que la operación resulte en 35', () => {
      expect(operacion1()).toBe(35);
    });
  });
  
  describe('operacion2', () => {
    test('retorna el resultado de la resta entre 50 y un número', () => {
      expect(operacion2(23)).toBe(27);
      expect(operacion2(10)).toBe(40);
    });
  });
  
  describe('operacion3', () => {
    test('retorna el resultado de la multiplicación entre 10 y un número', () => {
      expect(operacion3(25)).toBe(250);
      expect(operacion3(5)).toBe(50);
    });
  });
  
  describe('operacion4', () => {
    test('retorna el resultado del módulo entre 10 y 2', () => {
      expect(operacion4()).toBe(0);
    });
  });
  


describe('esPar', () => {
    test('retorna "es par" si el número es par', () => {
      expect(esPar(4)).toBe('es par');
      expect(esPar(10)).toBe('es par');
    });
  
    test('retorna "es impar" si el número es impar', () => {
      expect(esPar(3)).toBe('es impar');
      expect(esPar(9)).toBe('es impar');
    });
  });
  
  describe('esMasGrande', () => {
    test('retorna "es mayor" si el número es mayor a 50', () => {
      expect(esMasGrande(60)).toBe('es mayor');
      expect(esMasGrande(75)).toBe('es mayor');
    });
  
    test('retorna "es menor" si el número es menor a 50', () => {
      expect(esMasGrande(30)).toBe('es menor');
      expect(esMasGrande(10)).toBe('es menor');
    });
  
    test('retorna "argumento inválido" si el número es menor o igual a 0', () => {
      expect(esMasGrande(0)).toBe('argumento inválido');
      expect(esMasGrande(-5)).toBe('argumento inválido');
    });
  });
  
  describe('esMayorDeEdad', () => {
    test('retorna "es mayor" si la edad es mayor o igual a 18', () => {
      expect(esMayorDeEdad(18)).toBe('es mayor');
      expect(esMayorDeEdad(25)).toBe('es mayor');
    });
  
    test('retorna "es menor" si la edad es menor a 18', () => {
      expect(esMayorDeEdad(10)).toBe('es menor');
      expect(esMayorDeEdad(16)).toBe('es menor');
    });
  });
  
  describe('esDivisiblePorTres', () => {
    test('retorna "[numero] es divisible por 3" si el número es divisible por 3', () => {
      expect(esDivisiblePorTres(9)).toBe('9 es divisible por 3');
      expect(esDivisiblePorTres(12)).toBe('12 es divisible por 3');
    });
  
    test('retorna "no es divisible" si el número no es divisible por 3', () => {
      expect(esDivisiblePorTres(7)).toBe('no es divisible por 3');
      expect(esDivisiblePorTres(10)).toBe('no es divisible por 3');
    });
  });
  
  describe('esDivisiblePorTresYnueve', () => {
    test('retorna "es divisible por 3" si el número es divisible por 3 pero no por 9', () => {
      expect(esDivisiblePorTresYnueve(12)).toBe('es divisible por 3');
      expect(esDivisiblePorTresYnueve(21)).toBe('es divisible por 3');
    });
  
    test('retorna "es divisible por 9" si el número es divisible por 9 pero no por 3', () => {
      expect(esDivisiblePorTresYnueve(27)).toBe('es divisible por 9');
      expect(esDivisiblePorTresYnueve(45)).toBe('es divisible por 9');
    });
  
    test('retorna "es divisible por 3 y por 9" si el número es divisible por 3 y 9', () => {
      expect(esDivisiblePorTresYnueve(18)).toBe('es divisible por 3 y por 9');
      expect(esDivisiblePorTresYnueve(36)).toBe('es divisible por 3 y por 9');
    });
  
    test('retorna "no es divisible por 3 ni por 9" si el número no es divisible por 3 ni por 9', () => {
      expect(esDivisiblePorTresYnueve(7)).toBe('no es divisible por 3 ni por 9');
      expect(esDivisiblePorTresYnueve(13)).toBe('no es divisible por 3 ni por 9');
    });
  });
  
  describe('esVocal', () => {
    test('retorna "es vocal" si la letra es una vocal', () => {
      expect(esVocal('a')).toBe('es vocal');
      expect(esVocal('e')).toBe('es vocal');
    });
  
    test('retorna "no es vocal" si la letra no es una vocal', () => {
      expect(esVocal('b')).toBe('no es vocal');
      expect(esVocal('z')).toBe('no es vocal');
    });
  });
  
  describe('tieneTresCifras', () => {
    test('retorna true si el número tiene tres cifras', () => {
      expect(tieneTresCifras(123)).toBe(true);
      expect(tieneTresCifras(987)).toBe(true);
    });
  
    test('retorna false si el número no tiene tres cifras', () => {
      expect(tieneTresCifras(12)).toBe(false);
      expect(tieneTresCifras(1000)).toBe(false);
    });
  });
  
  describe('sumarNumeros', () => {
    test('retorna la suma de los dos números si ambos son positivos', () => {
      expect(sumarNumeros(5, 3)).toBe(8);
      expect(sumarNumeros(10, 7)).toBe(17);
    });
  
    test('retorna false si alguno de los números es negativo', () => {
      expect(sumarNumeros(5, -3)).toBe(false);
      expect(sumarNumeros(-10, 7)).toBe(false);
    });
  });
  
  describe('cuentaLetras', () => {
    test('retorna la cantidad de letras que tiene la palabra', () => {
      expect(cuentaLetras('Hola')).toBe(4);
      expect(cuentaLetras('Pedro')).toBe(5);
    });
  });
  
  describe('saluda', () => {
    test('retorna un string de saludo con el nombre, apellido y edad', () => {
      expect(saluda('Juan', 'Perez', 25)).toBe('Hola me llamo Juan Perez y tengo 25 años');
      expect(saluda('Maria', 'Gomez', 30)).toBe('Hola me llamo Maria Gomez y tengo 30 años');
    });
  });
  
  describe('redondea', () => {
    test('retorna el número redondeado más cercano', () => {
      expect(redondea(3.45)).toBe(3);
      expect(redondea(3.55)).toBe(4);
    });
  });
  
  describe('redondeaPorMayor', () => {
    test('retorna el número redondeado al mayor entero', () => {
      expect(redondeaPorMayor(3.45)).toBe(4);
      expect(redondeaPorMayor(3.85)).toBe(4);
      expect(redondeaPorMayor(3.1)).toBe(4);
    });
  });
  
  describe('redondeaPorMenor', () => {
    test('retorna el número redondeado al menor entero', () => {
      expect(redondeaPorMenor(3.45)).toBe(3);
      expect(redondeaPorMenor(3.85)).toBe(3);
      expect(redondeaPorMenor(3.1)).toBe(3);
    });
  });
  
  describe('espejo', () => {
    test('retorna la palabra invertida', () => {
      expect(espejo('pedro')).toBe('ordep');
      expect(espejo('hola')).toBe('aloh');
    });
  });


  
  
  
  
