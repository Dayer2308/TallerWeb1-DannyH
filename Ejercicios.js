//-------Ejercicio 1-------

//  var Cantidad_Carro;
//  var Ultimo_Digito;
//  let Dato = [];
//  let amarrillo = 0;
//  let rosa = 0;
//  let rojo = 0;
//  let verde = 0;
//  let azul = 0;
//  let total = 0;

//  Cantidad_Carro = prompt('Ingrese la cantidad de carros que ingresaron', '');

//  for(i = 0;i < Cantidad_Carro;i++){

//      Ultimo_Digito = prompt('Ingrese ultimo numero de la placa', '');
//      Dato.push(Ultimo_Digito);

//      if(Dato[i] == 1 || Dato[i] == 2){
//          amarrillo = amarrillo + 1;
//      }else if(Dato[i] == 3 || Dato[i] == 4){
//          rosa = rosa + 1;
//      }else if(Dato[i] == 5 || Dato[i] == 6){
//          rojo = rojo + 1;
//      }else if(Dato[i] == 7 || Dato[i] == 8){
//          verde = verde + 1;
//      }else if(Dato[i] == 9 || Dato[i] == 0){
//          azul = azul + 1;
//      }

//      total = i + 1;
    
//  }

//  document.write("Carros con calcomania:")
//  document.write("<br> Amarillo:"+amarrillo)
//  document.write("<br>Rosa:"+rosa)
//  document.write("<br>Rojo:"+rojo)
//  document.write("<br>Verde:"+verde)
//  document.write("<br>Azul:"+azul)
//  document.write("<br>Total de carros ingresados:"+total)

//-------Ejercicio 2------

//  var opcion;
//  var edad;
//  var total = 0;
//  let cat1 = 0;
//  let cat2 = 0;
//  let cat3 = 0;
//  let llave = null;
//  let animal = "";


//  opcion = prompt('Ingrese una opcion: \n1. Elefantes \n2. Jirafas \n3. Chimpances','');

//  switch(opcion){

//      case "1":
//       total = 20;
//       animal = "Elefante";
//       llave = true;
//      break;
    
//      case "2":
//       total = 15;
//       animal = "Jirafa";
//       llave = true;
//      break;

//      case "3":
//       total = 40;
//       animal = "Chimpace";
//       llave = true;
//      break;

//      default:
//      alert("Ingrese una opcion valida");
//      break;
//  }

//  if(llave == true){

//  for(let i = 1; i <= total ; i++){

//      edad = prompt('Ingrese la edad '+i+":",'');

//      if(edad >= 1 && edad <= 1){
//          cat1 = cat1 + 1;
//      }else if(edad < 3){
//          cat2 = cat2 + 1;
//      }else{
//          cat3 = cat3 + 1;
//      }
//  }

//  document.write("<br>El porcentaje de edad del animal "+animal+" es:");
//  document.write("<br>De 0 a 1 año es: "+(cat1/total)*100+"%");
//  document.write("<br>De mas de 1 año y menos de 3 es: "+(cat2/total)*100+"%");
//  document.write("<br>De 3 o mas años es: "+(cat3/total)*100+"%");

//  }else{

//  document.write('Las opciones son 1 a 3, recargue la pagina');    
// }

//-----Ejercicio 3------

//  var Trabajador;
//  var HorasT;
//  let Salario = 0;
//  let HorasEx = 0;

//  Trabajador = prompt('Ingrese el numero de trabajadores:','');

//  for(let i = 1; i <= Trabajador; i++){

//  HorasT = prompt('Numero de horas trabajadas','');

//  if(HorasT <= 40){
//      Salario = Number(HorasT) * 20;
//  }else{
//      HorasEx = Number(HorasT) - 40;
//      Salario = 40 *20 +(Number(HorasEx)*25);
//  }

//  alert("El salario del trabajador "+i+" es: "+"$"+Salario);

//  }

//-----Ejercicio 4--------

//  var Alumnos;
//  var Genero;
//  var Edad;
//  let EdadM = 0;
//  let CantidadM = 0;
//  let PromedioM = 0;
//  let EdadH = 0;
//  let CantidadH = 0;
//  let PromedioH = 0;
//  Alumnos = prompt('Ingrese el numero de estudiantes','');

//  for(let i = 0; i < Alumnos; i++){
//      Genero = prompt("Ingrese una opcion de acuerdo el sexo: \n1. Hombre \n2. Mujer",'');
//      Edad = prompt("Ingrese la edad:",'')

//      if(Genero == 1){
//          EdadM = Number(EdadM) + Number(Edad);
//          CantidadM = Number(CantidadM) + 1;
//          PromedioM = Number(EdadM)/Number(CantidadM);
//      }else if(Genero == 2){
//          EdadH = Number(EdadH) + Number(Edad);
//          CantidadH = Number(CantidadH) + 1;
//          PromedioH = Number(EdadH)/Number(CantidadH);
//      }
//  }

//  document.write("El promedio de los alumnos es: "+(CantidadH+CantidadM)/Alumnos);
//  document.write("<br>El promedio de edad de los hombres en los alumnos es: "+PromedioM);
//  document.write("<br>El promedio de edad de las mujeres en los alumnos es: "+PromedioM);

//-----Ejercicio 5-------

//  var CantidadN;
//  var Numero;
//  let Numerom = 0;

//  CantidadN = prompt('Ingrese la cantidad de numeros a calcular','');

//  for(let i = 1; i <= CantidadN; i++){
//      Numero = prompt('Ingrese un numero','');

//      if(i == 1){
//          Numerom = Numero;
//      }else if(i < Numerom){
//          Numerom = Numero;
//      }

//  }

//  document.write("El numero menor es: "+Numerom);

//------Ejercicio 6--------

//  var integrantes;
//  var Peso;
//  let totalp = 0;


//  for(let i = 1;i <= 5; i++){

//      integrantes = prompt('ingrese el peso anterior de la persona '+i,'');

//      for(let e = 1; e<=10;e++){
//          Peso = prompt('Ingrese el peso de la bascula'+e,'');
//          totalp = totalp + Number(Peso);
//      }

//      if((totalp/10)==integrantes){
//          alert("La persona "+i+" mantiene el mismo peso");
//      }else if((totalp/10)>integrantes){
//          alert("La persona "+i+" subio");
//      }else{
//          alert("La persona "+i+" bajo");
//      }

//  }

//------Ejercicio 7-------

//  var Productos;
//  var Precio;
//  var totalC = 0;

//  Productos = prompt('Cantidad de productos comprados','');

//  for(let i = 1; i<=Productos; i++){
//      Precio = prompt('Ingrese el precio del producto '+i);
//      totalC = totalC + Number(Precio);
//  }

//  document.write("El total de la compra es: $"+totalC);

//---------Ejercicio 8--------

// var ClienteB;
// var ValorB;
// var EdadC;
// var opcion;
// let Descuento = 0;
// let totalP = 0;
// let Catg1 = 0;
// let Catg2 = 0;
// let Catg3 = 0;
// let Catg4 = 0;
// let Catg5 = 0;

// ClienteB = prompt('Ingrese el numero de cliente','');
// ValorB = prompt('Ingrese el valor de la boleta','');

// for(let i=1;i <=ClienteB;i++){

//     EdadC = prompt('Ingrese la edad','');

//     if(Number(EdadC) < 5){
//         alert("No se permiten menores de 5 años");
//     }else if(Number(EdadC) <= 14){
//         Descuento = Number(ValorB)* 0.35;
//         Catg1 = Catg1 + Descuento;
//     }else if(Number(EdadC) <= 19){
//         Descuento = Number(ValorB)* 0.25;
//         Catg2 = Catg2 + Descuento;
//     }else if(Number(EdadC) <= 45){
//         Descuento = Number(ValorB)* 0.10;
//         Catg3 = Catg3 + Descuento;
//     }else if(Number(EdadC) <= 65){
//         Descuento = Number(ValorB)* 0.25;
//         Catg4 = Catg4 + Descuento;
//     }else{
//         Descuento = Number(ValorB)* 0.35;
//         Catg5 = Catg5 + Descuento;
//     }

//     alert("El descuento aplicado es: $"+Descuento);
//     totalP = totalP + Descuento;

// }

// document.write("<br>El total descuento de la categoria 1 es de: $"+Catg1);
// document.write("<br>El total descuento de la categoria 2 es de: $"+Catg2);
// document.write("<br>El total descuento de la categoria 3 es de: $"+Catg3);
// document.write("<br>El total descuento de la categoria 4 es de: $"+Catg4);
// document.write("<br>El total descuento de la categoria 5 es de: $"+Catg5);
// document.write("<br>El descuento total es: $"+totalP);

//-----Ejercicio 9------

// var VendedoresA;
// var VentaA;
// let Comision = 0;
// let VentaT = 0;

// VendedoresA = prompt('Ingresa el numero de vendedores','');

// for(let i = 1; i <= VendedoresA; i++){

//     VentaA = prompt('Ingresa el valor de la venta del vendedor ' + i,'');

//     if(Number(VentaA) <= 20000000){
//         Comision= Number(VentaA)*0.1;
//     }else if(Number(VentaA) > 20000000 && Number(VentaA) < 40000000){
//         Comision= Number(VentaA)*0.15;
//     }else if(Number(VentaA) >= 40000000 && Number(VentaA) < 80000000){
//         Comision= Number(VentaA)*0.2;
//     }else if(Number(VentaA) >= 80000000 && Number(VentaA) < 160000000){
//         Comision= Number(VentaA)*0.25;
//     }else{
//         Comision= Number(VentaA)*0.3;
//     }

//     alert("La comision del vendedor "+i+" es: $"+Comision);
//     VentaT = VentaT + Number(VentaA);

// }

// document.write("La venta total de kia es: $"+ VentaT);

//------Ejercicio 10----------

// let Cand1 = 0;
// let Cand2 = 0;
// let Cand3 = 0;
// var Voto = getRandomInt();

// for(let i = 0; i <= 50000; i++){

//     if(Voto == 1){
//         Cand1 = Cand1 + 1;
//     }else if(Voto == 2){
//         Cand2 = Cand2 + 1;
//     }else if(Vot0 == 3){
//         Cand3 = Cand3 + 1
//     }

// }

// document.write("El candidato 1 tiene de votos: "+Cand1);
// document.write("El candidato 2 tiene de votos: "+Cand2);
// document.write("El candidato 3 tiene de votos: "+Cand3);

// if(Cand1 == Cand2 && Cand1 == Cand3 && Cand2 == Cand3){
//     document.write("Los tres candidatos tienen la misma cantidad de votos");
// }else if(Cand1 == Cand2 && Cand1 > Cand3){
//     document.write("Los candidatos 1 y 2 tienen la misma cantidad de votos");
// }else if(Cand1 == Cand3 && Cand1 > Cand2){
//     document.write("Los candidatos 1 y 3 tienen la misma cantidad de votos");
// }else if(Cand2 == Cand3 && Cand2 > Cand1){
//     document.write("Los candidatos 2 y 3 tienen la misma cantidad de votos");
// }else if(Cand1 > Cand2 && Cand1 > Cand3){
//     document.write("Los candidatos 1 es el ganador");
// }else if(Cand2 > Cand1 && Cand2 > Cand3){
//     document.write("Los candidatos 2 es el ganador");
// }else{
//     document.write("Los candidatos 3 es el ganador");
// }

//------Ejercicio 11---------

// let numero = 1;
// let contador = 0;
// let x = 0; 

// for(numero; numero <= 100; numero++){

// i = 1;

//     while(i <= numero){

//         if(numero % i == 0){
//             contador = contador + 1;
//         }
//         i = i +1;
//     }

//     if(contador == 2){
//        document.write("El numero "+numero+ "es primo");
//     }

// }

//------Ejercicio 14---------

var Num1;
var Num2;
let a=0;
let b=0;
let TotalV=0;

Num1 = prompt('Ingrese un numero','');
Num2 = prompt('Ingrese un numero','');

if(Number(Num1)>Number(Num2)){

    a = Num1;
    b = Num2;

}else{
    a = Num2;
    b = Num1;
}

while(b != 0){

    TotalV = b;
    b = a % b;
    a = TotalV;

}

document.write("El Maximo Comun Divisor entre "+Num1+" Y "+Num2+" es:"+TotalV);