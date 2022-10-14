//-------Ejercicio 1-------

 var Cantidad_Carro;
 var Ultimo_Digito;
 let Dato = [];
 let amarrillo = 0;
 let rosa = 0;
 let rojo = 0;
 let verde = 0;
 let azul = 0;
 let total = 0;

 Cantidad_Carro = prompt('Ingrese la cantidad de carros que ingresaron', '');

 for(i = 0;i < Cantidad_Carro;i++){

     Ultimo_Digito = prompt('Ingrese ultimo numero de la placa', '');
     Dato.push(Ultimo_Digito);

     if(Dato[i] == 1 || Dato[i] == 2){
         amarrillo = amarrillo + 1;
     }else if(Dato[i] == 3 || Dato[i] == 4){
         rosa = rosa + 1;
     }else if(Dato[i] == 5 || Dato[i] == 6){
         rojo = rojo + 1;
     }else if(Dato[i] == 7 || Dato[i] == 8){
         verde = verde + 1;
     }else if(Dato[i] == 9 || Dato[i] == 0){
         azul = azul + 1;
     }

     total = i + 1;
    
 }

 document.write("Carros con calcomania:")
 document.write("<br> Amarillo:"+amarrillo)
 document.write("<br>Rosa:"+rosa)
 document.write("<br>Rojo:"+rojo)
 document.write("<br>Verde:"+verde)
 document.write("<br>Azul:"+azul)
 document.write("<br>Total de carros ingresados:"+total)
