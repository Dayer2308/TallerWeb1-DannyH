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

 var Trabajador;
 var HorasT;
 let Salario = 0;
 let HorasEx = 0;

 Trabajador = prompt('Ingrese el numero de trabajadores:','');

 for(let i = 1; i <= Trabajador; i++){

 HorasT = prompt('Numero de horas trabajadas','');

 if(HorasT <= 40){
     Salario = Number(HorasT) * 20;
 }else{
     HorasEx = Number(HorasT) - 40;
     Salario = 40 *20 +(Number(HorasEx)*25);
 }

 alert("El salario del trabajador "+i+" es: "+"$"+Salario);

 }


