function empezarmapa1() {
var count = 18;
alert("tienes: "+count+" segundos para minar");
var number = document.getElementById('numero');
var intervalo = setInterval(function(){
                   count--;
                   number.innerHTML = count;
                   if(count == 0){
                     clearInterval(intervalo);
                     dibujarscore1();
                   }
                  }, 1000);}

var cuadro = new Array 
    cuadro[0]= document.getElementById('a1')
    cuadro[1]= document.getElementById('a2')
    cuadro[2]= document.getElementById('a3')
    cuadro[3]= document.getElementById('a4')
    cuadro[4]= document.getElementById('a5')
    cuadro[5]= document.getElementById('a6')
    cuadro[6]= document.getElementById('a7')
    cuadro[7]= document.getElementById('a8')
    cuadro[8]= document.getElementById('a9')
    cuadro[9]= document.getElementById('a10')
    cuadro[10]= document.getElementById('a11')
    cuadro[11]= document.getElementById('a12')
    cuadro[12]= document.getElementById('a13')
    cuadro[13]= document.getElementById('a14')
    cuadro[14]= document.getElementById('a15')
    cuadro[15]= document.getElementById('a16')
    cuadro[16]= document.getElementById('a17')
    cuadro[17]= document.getElementById('a18')
    cuadro[18]= document.getElementById('a19')
    cuadro[19]= document.getElementById('a20')
    cuadro[20]= document.getElementById('a21')
    cuadro[21]= document.getElementById('a22')
    cuadro[22]= document.getElementById('a23')
    cuadro[23]= document.getElementById('a24')
    cuadro[24]= document.getElementById('a25')
    cuadro[25]= document.getElementById('a26')
    cuadro[26]= document.getElementById('a27')
    cuadro[27]= document.getElementById('a28')
    cuadro[28]= document.getElementById('a29')
    cuadro[29]= document.getElementById('a30')
    cuadro[30]= document.getElementById('a31')
    cuadro[31]= document.getElementById('a32')
    cuadro[32]= document.getElementById('a33')
    cuadro[33]= document.getElementById('a34')
    cuadro[34]= document.getElementById('a35')
    cuadro[35]= document.getElementById('a36')
    cuadro[36]= document.getElementById('a37')
    cuadro[37]= document.getElementById('a38')
    cuadro[38]= document.getElementById('a39')
    cuadro[39]= document.getElementById('a40')
    cuadro[40]= document.getElementById('a41')
    cuadro[41]= document.getElementById('a42')
    cuadro[42]= document.getElementById('a43')
    cuadro[43]= document.getElementById('a44')
    cuadro[44]= document.getElementById('a45')
    cuadro[45]= document.getElementById('a46')
    cuadro[46]= document.getElementById('a47')
    cuadro[47]= document.getElementById('a48')
    cuadro[48]= document.getElementById('a49')
    cuadro[49]= document.getElementById('a50')
    cuadro[50]= document.getElementById('a51')
    cuadro[51]= document.getElementById('a52')
    cuadro[52]= document.getElementById('a53')
    cuadro[53]= document.getElementById('a54')

 var destello1 = Math.random()*cuadro.length;
    destello1 = Math.floor(destello1);

 var destello2 = Math.random()*cuadro.length;
    destello2 = Math.floor(destello2);

 var destello3 = Math.random()*cuadro.length;
    destello3 = Math.floor(destello3);

 var destello4 = Math.random()*cuadro.length;
    destello4 = Math.floor(destello4);

cuadro[destello1].style.animationName= "animacion";
 cuadro[destello1].style.animationDuration= "0.25s";
 cuadro[destello1].style.animationIterationCount= "infinite";
 cuadro[destello1].src = "https://i.ibb.co/TLs8dN5/destello.png";

 cuadro[destello2].style.animationName= "animacion";
 cuadro[destello2].style.animationDuration= "0.25s";
 cuadro[destello2].style.animationIterationCount= "infinite";
 cuadro[destello2].src = "https://i.ibb.co/TLs8dN5/destello.png";

 cuadro[destello3].style.animationName= "animacion";
 cuadro[destello3].style.animationDuration= "0.25s";
 cuadro[destello3].style.animationIterationCount= "infinite";
 cuadro[destello3].src = "https://i.ibb.co/TLs8dN5/destello.png";

 cuadro[destello4].style.animationName= "animacion";
 cuadro[destello4].style.animationDuration= "0.25s";
 cuadro[destello4].style.animationIterationCount= "infinite";
 cuadro[destello4].src = "https://i.ibb.co/TLs8dN5/destello.png";

//items//
var items = new Array
    items[0]= "https://i.ibb.co/hRrsJ5P/bitcoin.jpg"
    items[1]= "https://i.ibb.co/hRrsJ5P/bitcoin.jpg"
    items[2]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items[3]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items[4]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items[5]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items[6]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    items[7]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[8]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[9]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[10]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[11]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[12]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[13]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[14]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[15]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[16]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[17]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[18]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[19]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[20]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[21]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[22]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[23]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[24]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[25]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[26]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[27]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[28]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[29]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[30]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[31]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[32]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[33]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[34]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[35]= "https://i.ibb.co/VL5kPMc/tierra.jpg"
    items[36]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items[37]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items[38]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items[39]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items[40]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items[41]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items[42]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items[43]= "https://i.ibb.co/grw64xB/carbon.jpg"
    items[44]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items[45]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items[46]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items[47]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items[48]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items[49]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items[50]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items[51]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items[52]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    items[53]= "https://i.ibb.co/0jqRTQJ/oro.jpg"

 var numero1 = Math.random()*items.length;
    numero1 = Math.floor(numero1);
 var numero2 = Math.random()*items.length;
    numero2 = Math.floor(numero2);
 var numero3 = Math.random()*items.length;
    numero3 = Math.floor(numero3);
 var numero4 = Math.random()*items.length;
    numero4 = Math.floor(numero4);
 var numero5 = Math.random()*items.length;
    numero5 = Math.floor(numero5);
 var numero6 = Math.random()*items.length;
    numero6 = Math.floor(numero6);
 var numero7 = Math.random()*items.length;
    numero7 = Math.floor(numero7);
 var numero8 = Math.random()*items.length;
    numero8 = Math.floor(numero8);
 var numero9 = Math.random()*items.length;
    numero9 = Math.floor(numero9);


 var numero10 = Math.random()*items.length;
    numero10 = Math.floor(numero10);  
 var numero11 = Math.random()*items.length;
    numero11 = Math.floor(numero11); 
 var numero12 = Math.random()*items.length;
    numero12 = Math.floor(numero12); 
 var numero13 = Math.random()*items.length;
    numero13 = Math.floor(numero13); 
 var numero14 = Math.random()*items.length;
    numero14 = Math.floor(numero14); 
 var numero15 = Math.random()*items.length;
    numero15 = Math.floor(numero15); 
 var numero16 = Math.random()*items.length;
    numero16 = Math.floor(numero16);  
 var numero17 = Math.random()*items.length;
    numero17 = Math.floor(numero17); 
 var numero18 = Math.random()*items.length;
    numero18 = Math.floor(numero18); 


 var numero19 = Math.random()*items.length;
    numero19 = Math.floor(numero19);    
 var numero20 = Math.random()*items.length;
    numero20 = Math.floor(numero20); 
 var numero21 = Math.random()*items.length;
    numero21 = Math.floor(numero21); 
 var numero22 = Math.random()*items.length;
    numero22 = Math.floor(numero22); 
 var numero23 = Math.random()*items.length;
    numero23 = Math.floor(numero23); 
 var numero24 = Math.random()*items.length;
    numero24 = Math.floor(numero24); 
 var numero25 = Math.random()*items.length;
    numero25 = Math.floor(numero25); 
 var numero26 = Math.random()*items.length;
    numero26 = Math.floor(numero26);
 var numero27 = Math.random()*items.length;
    numero27 = Math.floor(numero27);


 var numero28 = Math.random()*items.length;
    numero28 = Math.floor(numero28);    
 var numero29 = Math.random()*items.length;
    numero29 = Math.floor(numero29); 
 var numero30 = Math.random()*items.length;
    numero30 = Math.floor(numero30); 
 var numero31 = Math.random()*items.length;
    numero31 = Math.floor(numero31); 
 var numero32 = Math.random()*items.length;
    numero32 = Math.floor(numero32); 
 var numero33 = Math.random()*items.length;
    numero33 = Math.floor(numero32); 
 var numero34 = Math.random()*items.length;
    numero34 = Math.floor(numero34); 
 var numero35 = Math.random()*items.length;
    numero35 = Math.floor(numero35);
 var numero36 = Math.random()*items.length;
    numero36 = Math.floor(numero36);


 var numero37 = Math.random()*items.length;
    numero37 = Math.floor(numero37);    
 var numero38 = Math.random()*items.length;
    numero38 = Math.floor(numero38); 
 var numero39 = Math.random()*items.length;
    numero39 = Math.floor(numero39); 
 var numero40 = Math.random()*items.length;
    numero40 = Math.floor(numero40); 
 var numero41 = Math.random()*items.length;
    numero41 = Math.floor(numero41); 
 var numero42 = Math.random()*items.length;
    numero42 = Math.floor(numero42); 
 var numero43 = Math.random()*items.length;
    numero43 = Math.floor(numero43); 
 var numero44 = Math.random()*items.length;
    numero44 = Math.floor(numero44);
 var numero45 = Math.random()*items.length;
    numero45 = Math.floor(numero45); 


 var numero46 = Math.random()*items.length;
    numero46 = Math.floor(numero46);    
 var numero47 = Math.random()*items.length;
    numero47 = Math.floor(numero47); 
 var numero48 = Math.random()*items.length;
    numero48 = Math.floor(numero48); 
 var numero49 = Math.random()*items.length;
    numero49 = Math.floor(numero49); 
 var numero50 = Math.random()*items.length;
    numero50 = Math.floor(numero50); 
 var numero51 = Math.random()*items.length;
    numero51 = Math.floor(numero51); 
 var numero52 = Math.random()*items.length;
    numero52 = Math.floor(numero52); 
 var numero53 = Math.random()*items.length;
    numero53 = Math.floor(numero53);
 var numero54 = Math.random()*items.length;
    numero54 = Math.floor(numero54);

var suerte= new Array 
    suerte[0]= "https://i.ibb.co/0jqRTQJ/oro.jpg"
    suerte[1]= "https://i.ibb.co/cvST1m8/diamante.jpg"
    suerte[2]= "https://i.ibb.co/hRrsJ5P/bitcoin.jpg"

 var numeros1 = Math.random()*suerte.length;
    numeros1 = Math.floor(numeros1); 
 var numeros2 = Math.random()*suerte.length;
    numeros2 = Math.floor(numeros2);
 var numeros3 = Math.random()*suerte.length;
    numeros3 = Math.floor(numeros3);
var puntos = 0;
var bitcoin = 0;
var diamante = 0;
var oro = 0;



dibujarscore();

function dibujarscore() {

  document.getElementById('puntos2').innerHTML =puntos;}

var click1b = 0;
 var click1d = 0;
 var click1o = 0;

 var click2b = 0;
 var click2d = 0;
 var click2o = 0;

 var click3b = 0;
 var click3d = 0;
 var click3o = 0;

 var click4b = 0;
 var click4d = 0;
 var click4o = 0;

 var click5b = 0;
 var click5d = 0;
 var click5o = 0;

 var click6b = 0;
 var click6d = 0;
 var click6o = 0;

 var click7b = 0;
 var click7d = 0;
 var click7o = 0;

 var click8b = 0;
 var click8d = 0;
 var click8o = 0;

 var click9b = 0;
 var click9d = 0;
 var click9o = 0;


var click10b = 0;
 var click10d = 0;
 var click10o = 0;

 var click11b = 0;
 var click11d = 0;
 var click11o = 0;

 var click12b = 0;
 var click12d = 0;
 var click12o = 0;

 var click13b = 0;
 var click13d = 0;
 var click13o = 0;

 var click14b = 0;
 var click14d = 0;
 var click14o = 0;

 var click15b = 0;
 var click15d = 0;
 var click15o = 0;

 var click16b = 0;
 var click16d = 0;
 var click16o = 0;

 var click17b = 0;
 var click17d = 0;
 var click17o = 0;

 var click18b = 0;
 var click18d = 0;
 var click18o = 0;


var click19b = 0;
 var click19d = 0;
 var click19o = 0;

 var click20b = 0;
 var click20d = 0;
 var click20o = 0;

 var click21b = 0;
 var click21d = 0;
 var click21o = 0;

 var click22b = 0;
 var click22d = 0;
 var click22o = 0;

 var click23b = 0;
 var click23d = 0;
 var click23o = 0;

 var click24b = 0;
 var click24d = 0;
 var click24o = 0;

 var click25b = 0;
 var click25d = 0;
 var click25o = 0;

 var click26b = 0;
 var click26d = 0;
 var click26o = 0;

 var click27b = 0;
 var click27d = 0;
 var click27o = 0;


var click28b = 0;
 var click28d = 0;
 var click28o = 0;

 var click29b = 0;
 var click29d = 0;
 var click29o = 0;

 var click30b = 0;
 var click30d = 0;
 var click30o = 0;

 var click31b = 0;
 var click31d = 0;
 var click31o = 0;

 var click32b = 0;
 var click32d = 0;
 var click32o = 0;

 var click33b = 0;
 var click33d = 0;
 var click33o = 0;

 var click34b = 0;
 var click34d = 0;
 var click34o = 0;

 var click35b = 0;
 var click35d = 0;
 var click35o = 0;

 var click36b = 0;
 var click36d = 0;
 var click36o = 0;


var click37b = 0;
 var click37d = 0;
 var click37o = 0;

 var click38b = 0;
 var click38d = 0;
 var click38o = 0;

 var click39b = 0;
 var click39d = 0;
 var click39o = 0;

 var click40b = 0;
 var click40d = 0;
 var click40o = 0;

 var click41b = 0;
 var click41d = 0;
 var click41o = 0;

 var click42b = 0;
 var click42d = 0;
 var click42o = 0;

 var click43b = 0;
 var click43d = 0;
 var click43o = 0;

 var click44b = 0;
 var click44d = 0;
 var click44o = 0;

 var click45b = 0;
 var click45d = 0;
 var click45o = 0;


var click46b = 0;
 var click46d = 0;
 var click46o = 0;

 var click47b = 0;
 var click47d = 0;
 var click47o = 0;

 var click48b = 0;
 var click48d = 0;
 var click48o = 0;

 var click49b = 0;
 var click49d = 0;
 var click49o = 0;

 var click50b = 0;
 var click50d = 0;
 var click50o = 0;

 var click51b = 0;
 var click51d = 0;
 var click51o = 0;

 var click52b = 0;
 var click52d = 0;
 var click52o = 0;

 var click53b = 0;
 var click53d = 0;
 var click53o = 0;

 var click54b = 0;
 var click54d = 0;
 var click54o = 0;

function a1() {
    click1b -= 1;
    click1d -= 1;
    click1o -= 1;
  if (document.getElementById('a1').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a1').src= items[numero1];
    b1();
 }
 if (document.getElementById('a1').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a1').src= suerte[numeros1];
    document.getElementById('a1').style.animationName= "";
    document.getElementById('a1').style.animationDuration= "";
    document.getElementById('a1').style.animationIterationCount= "";
    b1();
 }
 if (click1b == 0) {
    document.getElementById('a1').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click1d == 0) {
    document.getElementById('a1').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click1o == 0) {
    document.getElementById('a1').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro += 1;
    dibujarscore();
    
 }}  
 
 function b1() {

 if (document.getElementById('a1').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click1b = 4;
  }
 
 if (document.getElementById('a1').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click1d = 3;
  }
    
 if (document.getElementById('a1').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click1o = 2;
 }}                          

 function a2() {
    click2b -= 1;
    click2d -= 1;
    click2o -= 1;
  if (document.getElementById('a2').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a2').src= items[numero2];
    b2();
 }
 if (document.getElementById('a2').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a2').src= suerte[numeros2];
    document.getElementById('a2').style.animationName= "";
    document.getElementById('a2').style.animationDuration= "";
    document.getElementById('a2').style.animationIterationCount= "";
    b2();
 }
 if (click2b == 0) {
    document.getElementById('a2').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click2d == 0) {
    document.getElementById('a2').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click2o == 0) {
    document.getElementById('a2').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro += 1;
    dibujarscore();
    
 }}  
 function b2() {

 if (document.getElementById('a2').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click2b = 4;
  }
 
 if (document.getElementById('a2').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click2d = 3;
  }
    
 if (document.getElementById('a2').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click2o = 2;
 }}                          

 function a3() {
    click3b -= 1;
    click3d -= 1;
    click3o -= 1;
  if (document.getElementById('a3').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a3').src= items[numero3];
    b3();
 }
 if (document.getElementById('a3').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a3').src= suerte[numeros3];
    document.getElementById('a3').style.animationName= "";
    document.getElementById('a3').style.animationDuration= "";
    document.getElementById('a3').style.animationIterationCount= "";
    b3();
 }
 if (click3b == 0) {
    document.getElementById('a3').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click3d == 0) {
    document.getElementById('a3').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click3o == 0) {
    document.getElementById('a3').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro += 1;
    dibujarscore();
    
 }}  
 function b3() {

 if (document.getElementById('a3').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click3b = 4;
  }
 
 if (document.getElementById('a3').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click3d = 3;
  }
    
 if (document.getElementById('a3').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click3o = 2;
 }}                          

 function a4() {
    click4b -= 1;
    click4d -= 1;
    click4o -= 1;
  if (document.getElementById('a4').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a4').src= items[numero4];
    b4();
 }
 if (document.getElementById('a4').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a4').src= suerte[numeros1];
    document.getElementById('a4').style.animationName= "";
    document.getElementById('a4').style.animationDuration= "";
    document.getElementById('a4').style.animationIterationCount= "";
    b4();
 }
 if (click4b == 0) {
    document.getElementById('a4').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click4d == 0) {
    document.getElementById('a4').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click4o == 0) {
    document.getElementById('a4').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro += 1;
    dibujarscore();
    
 }}  
 function b4() {

 if (document.getElementById('a4').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click4b = 4;
  }
 
 if (document.getElementById('a4').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click4d = 3;
  }
    
 if (document.getElementById('a4').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click4o = 2;
 }}                          

 function a5() {
    click5b -= 1;
    click5d -= 1;
    click5o -= 1;
  if (document.getElementById('a5').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a5').src= items[numero5];
    b5();
 }
 if (document.getElementById('a5').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a5').src= suerte[numeros2];
    document.getElementById('a5').style.animationName= "";
    document.getElementById('a5').style.animationDuration= "";
    document.getElementById('a5').style.animationIterationCount= "";
    b5();
 }
 if (click5b == 0) {
    document.getElementById('a5').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click5d == 0) {
    document.getElementById('a5').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click5o == 0) {
    document.getElementById('a5').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro += 1;
    dibujarscore();
    
 }}  
 function b5() {

 if (document.getElementById('a5').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click5b = 4;
  }
 
 if (document.getElementById('a5').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click5d = 3;
  }
    
 if (document.getElementById('a5').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click5o = 2;
 }}                         

 function a6() {
    click6b -= 1;
    click6d -= 1;
    click6o -= 1;
  if (document.getElementById('a6').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a6').src= items[numero6];
    b6();
 }
 if (document.getElementById('a6').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a6').src= suerte[numeros3];
    document.getElementById('a6').style.animationName= "";
    document.getElementById('a6').style.animationDuration= "";
    document.getElementById('a6').style.animationIterationCount= "";
    b6();
 }
 if (click6b == 0) {
    document.getElementById('a6').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click6d == 0) {
    document.getElementById('a6').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click6o == 0) {
    document.getElementById('a6').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro += 1;
    dibujarscore();
    
 }}  
 function b6() {

 if (document.getElementById('a6').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click6b = 4;
  }
 
 if (document.getElementById('a6').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click6d = 3;
  }
    
 if (document.getElementById('a6').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click6o = 2;
 }}                         

 function a7() {
    click7b -= 1;
    click7d -= 1;
    click7o -= 1;
  if (document.getElementById('a7').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a7').src= items[numero7];
    b7();
 }
 if (document.getElementById('a7').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a7').src= suerte[numeros1];
    document.getElementById('a7').style.animationName= "";
    document.getElementById('a7').style.animationDuration= "";
    document.getElementById('a7').style.animationIterationCount= "";
    b7();
 }
 if (click7b == 0) {
    document.getElementById('a7').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click7d == 0) {
    document.getElementById('a7').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click7o == 0) {
    document.getElementById('a7').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b7() {

 if (document.getElementById('a7').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click7b = 4;
  }
 
 if (document.getElementById('a7').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click7d = 3;
  }
    
 if (document.getElementById('a7').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click7o = 2;
 }}                         

 function a8() {
    click8b -= 1;
    click8d -= 1;
    click8o -= 1;
  if (document.getElementById('a8').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a8').src= items[numero8];
    b8();
 }
 if (document.getElementById('a8').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a8').src= suerte[numeros2];
    document.getElementById('a8').style.animationName= "";
    document.getElementById('a8').style.animationDuration= "";
    document.getElementById('a8').style.animationIterationCount= "";
    b8();
 }
 if (click8b == 0) {
    document.getElementById('a8').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click8d == 0) {
    document.getElementById('a8').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click8o == 0) {
    document.getElementById('a8').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b8() {

 if (document.getElementById('a8').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click8b = 4;
  }
 
 if (document.getElementById('a8').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click8d = 3;
  }
    
 if (document.getElementById('a8').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click8o = 2;
 }}                         

 function a9() {
    click9b -= 1;
    click9d -= 1;
    click9o -= 1;
  if (document.getElementById('a9').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a9').src= items[numero9];
    b9();
 }
 if (document.getElementById('a9').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a9').src= suerte[numeros3];
    document.getElementById('a9').style.animationName= "";
    document.getElementById('a9').style.animationDuration= "";
    document.getElementById('a9').style.animationIterationCount= "";
    b9();
 }
 if (click9b == 0) {
    document.getElementById('a9').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click9d == 0) {
    document.getElementById('a9').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3
    diamante += 1;
    dibujarscore();
    
 }
 if (click9o == 0) {
    document.getElementById('a9').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b9() {

 if (document.getElementById('a9').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click9b = 4;
  }
 
 if (document.getElementById('a9').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click9d = 3;
  }
    
 if (document.getElementById('a9').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click9o = 2;
 }}                         


function a10() {
    click10b -= 1;
    click10d -= 1;
    click10o -= 1;
  if (document.getElementById('a10').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a10').src= items[numero10];
    b10();
 }
 if (document.getElementById('a10').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a10').src= suerte[numeros1];
    document.getElementById('a10').style.animationName= "";
    document.getElementById('a10').style.animationDuration= "";
    document.getElementById('a10').style.animationIterationCount= "";
    b10();
 }
 if (click10b == 0) {
    document.getElementById('a10').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click10d == 0) {
    document.getElementById('a10').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click10o == 0) {
    document.getElementById('a10').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 
 function b10() {

 if (document.getElementById('a10').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click10b = 4;
  }
 
 if (document.getElementById('a10').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click10d = 3;
  }
    
 if (document.getElementById('a10').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click10o = 2;
 }}                          

 function a11() {
    click11b -= 1;
    click11d -= 1;
    click11o -= 1;
  if (document.getElementById('a11').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a11').src= items[numero11];
    b11();
 }
 if (document.getElementById('a11').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a11').src= suerte[numeros2];
    document.getElementById('a11').style.animationName= "";
    document.getElementById('a11').style.animationDuration= "";
    document.getElementById('a11').style.animationIterationCount= "";
    b11();
 }
 if (click11b == 0) {
    document.getElementById('a11').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click11d == 0) {
    document.getElementById('a11').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click11o == 0) {
    document.getElementById('a11').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b11() {

 if (document.getElementById('a11').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click11b = 4;
  }
 
 if (document.getElementById('a11').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click11d = 3;
  }
    
 if (document.getElementById('a11').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click11o = 2;
 }}                          

 function a12() {
    click12b -= 1;
    click12d -= 1;
    click12o -= 1;
  if (document.getElementById('a12').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a12').src= items[numero12];
    b12();
 }
 if (document.getElementById('a12').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a12').src= suerte[numeros3];
    document.getElementById('a12').style.animationName= "";
    document.getElementById('a12').style.animationDuration= "";
    document.getElementById('a12').style.animationIterationCount= "";
    b12();
 }
 if (click12b == 0) {
    document.getElementById('a12').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click12d == 0) {
    document.getElementById('a12').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click12o == 0) {
    document.getElementById('a12').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b12() {

 if (document.getElementById('a12').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click12b = 4;
  }
 
 if (document.getElementById('a12').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click12d = 3;
  }
    
 if (document.getElementById('a12').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click12o = 2;
 }}                          

 function a13() {
    click13b -= 1;
    click13d -= 1;
    click13o -= 1;
  if (document.getElementById('a13').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a13').src= items[numero13];
    b13();
 }
 if (document.getElementById('a13').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a13').src= suerte[numeros1];
    document.getElementById('a13').style.animationName= "";
    document.getElementById('a13').style.animationDuration= "";
    document.getElementById('a13').style.animationIterationCount= "";
    b13();
 }
 if (click13b == 0) {
    document.getElementById('a13').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click13d == 0) {
    document.getElementById('a13').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click13o == 0) {
    document.getElementById('a13').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b13() {

 if (document.getElementById('a13').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click13b = 4;
  }
 
 if (document.getElementById('a13').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click13d = 3;
  }
    
 if (document.getElementById('a13').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click13o = 2;
 }}                          

 function a14() {
    click14b -= 1;
    click14d -= 1;
    click14o -= 1;
  if (document.getElementById('a14').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a14').src= items[numero14];
    b14();
 }
 if (document.getElementById('a14').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a14').src= suerte[numeros2];
    document.getElementById('a14').style.animationName= "";
    document.getElementById('a14').style.animationDuration= "";
    document.getElementById('a14').style.animationIterationCount= "";
    b14();
 }
 if (click14b == 0) {
    document.getElementById('a14').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click14d == 0) {
    document.getElementById('a14').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click14o == 0) {
    document.getElementById('a14').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b14() {

 if (document.getElementById('a14').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click14b = 4;
  }
 
 if (document.getElementById('a14').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click14d = 3;
  }
    
 if (document.getElementById('a14').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click14o = 2;
 }}                         

 function a15() {
    click15b -= 1;
    click15d -= 1;
    click15o -= 1;
  if (document.getElementById('a15').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a15').src= items[numero15];
    b15();
 }
 if (document.getElementById('a15').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a15').src= suerte[numeros3];
    document.getElementById('a15').style.animationName= "";
    document.getElementById('a15').style.animationDuration= "";
    document.getElementById('a15').style.animationIterationCount= "";
    b15();
 }
 if (click15b == 0) {
    document.getElementById('a15').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click15d == 0) {
    document.getElementById('a15').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click15o == 0) {
    document.getElementById('a15').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b15() {

 if (document.getElementById('a15').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click15b = 4;
  }
 
 if (document.getElementById('a15').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click15d = 3;
  }
    
 if (document.getElementById('a15').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click15o = 2;
 }}                         

 function a16() {
    click16b -= 1;
    click16d -= 1;
    click16o -= 1;
  if (document.getElementById('a16').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a16').src= items[numero16];
    b16();
 }
 if (document.getElementById('a16').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a16').src= suerte[numeros1];
    document.getElementById('a16').style.animationName= "";
    document.getElementById('a16').style.animationDuration= "";
    document.getElementById('a16').style.animationIterationCount= "";
    b16();
 }
 if (click16b == 0) {
    document.getElementById('a16').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click16d == 0) {
    document.getElementById('a16').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click16o == 0) {
    document.getElementById('a16').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b16() {

 if (document.getElementById('a16').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click16b = 4;
  }
 
 if (document.getElementById('a16').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click16d = 3;
  }
    
 if (document.getElementById('a16').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click16o = 2;
 }}                         

 function a17() {
    click17b -= 1;
    click17d -= 1;
    click17o -= 1;
  if (document.getElementById('a17').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a17').src= items[numero17];
    b17();
 }
 if (document.getElementById('a17').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a17').src= suerte[numeros2];
    document.getElementById('a17').style.animationName= "";
    document.getElementById('a17').style.animationDuration= "";
    document.getElementById('a17').style.animationIterationCount= "";
    b17();
 }
 if (click17b == 0) {
    document.getElementById('a17').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click17d == 0) {
    document.getElementById('a17').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click17o == 0) {
    document.getElementById('a17').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b17() {

 if (document.getElementById('a17').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click17b = 4;
  }
 
 if (document.getElementById('a17').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click17d = 3;
  }
    
 if (document.getElementById('a17').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click17o = 2;
 }}                         

 function a18() {
    click18b -= 1;
    click18d -= 1;
    click18o -= 1;
  if (document.getElementById('a18').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a18').src= items[numero18];
    b18();
 }
 if (document.getElementById('a18').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a18').src= suerte[numeros3];
    document.getElementById('a18').style.animationName= "";
    document.getElementById('a18').style.animationDuration= "";
    document.getElementById('a18').style.animationIterationCount= "";
    b18();
 }
 if (click18b == 0) {
    document.getElementById('a18').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click18d == 0) {
    document.getElementById('a18').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click18o == 0) {
    document.getElementById('a18').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b18() {

 if (document.getElementById('a18').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click18b = 4;
  }
 
 if (document.getElementById('a18').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click18d = 3;
  }
    
 if (document.getElementById('a18').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click18o = 2;
 }}                        


function a19() {
    click19b -= 1;
    click19d -= 1;
    click19o -= 1;
  if (document.getElementById('a19').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a19').src= items[numero19];
    b19();
 }
 if (document.getElementById('a19').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a19').src= suerte[numeros1];
    document.getElementById('a19').style.animationName= "";
    document.getElementById('a19').style.animationDuration= "";
    document.getElementById('a19').style.animationIterationCount= "";
    b19();
 }
 if (click19b == 0) {
    document.getElementById('a19').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click19d == 0) {
    document.getElementById('a19').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click19o == 0) {
    document.getElementById('a19').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 
 function b19() {

 if (document.getElementById('a19').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click19b = 4;
  }
 
 if (document.getElementById('a19').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click19d = 3;
  }
    
 if (document.getElementById('a19').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click19o = 2;
 }}                          

 function a20() {
    click20b -= 1;
    click20d -= 1;
    click20o -= 1;
  if (document.getElementById('a20').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a20').src= items[numero20];
    b20();
 }
 if (document.getElementById('a20').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a20').src= suerte[numeros2];
    document.getElementById('a20').style.animationName= "";
    document.getElementById('a20').style.animationDuration= "";
    document.getElementById('a20').style.animationIterationCount= "";
    b20();
 }
 if (click20b == 0) {
    document.getElementById('a20').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click20d == 0) {
    document.getElementById('a20').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click20o == 0) {
    document.getElementById('a20').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b20() {

 if (document.getElementById('a20').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click20b = 4;
  }
 
 if (document.getElementById('a20').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click20d = 3;
  }
    
 if (document.getElementById('a20').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click20o = 2;
 }}                          

 function a21() {
    click21b -= 1;
    click21d -= 1;
    click21o -= 1;
  if (document.getElementById('a21').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a21').src= items[numero21];
    b21();
 }
 if (document.getElementById('a21').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a21').src= suerte[numeros3];
    document.getElementById('a21').style.animationName= "";
    document.getElementById('a21').style.animationDuration= "";
    document.getElementById('a21').style.animationIterationCount= "";
    b21();
 }
 if (click21b == 0) {
    document.getElementById('a21').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click21d == 0) {
    document.getElementById('a21').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click21o == 0) {
    document.getElementById('a21').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b21() {

 if (document.getElementById('a21').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click21b = 4;
  }
 
 if (document.getElementById('a21').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click21d = 3;
  }
    
 if (document.getElementById('a21').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click21o = 2;
 }}                          

 function a22() {
    click22b -= 1;
    click22d -= 1;
    click22o -= 1;
  if (document.getElementById('a22').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a22').src= items[numero22];
    b22();
 }
 if (document.getElementById('a22').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a22').src= suerte[numeros1];
    document.getElementById('a22').style.animationName= "";
    document.getElementById('a22').style.animationDuration= "";
    document.getElementById('a22').style.animationIterationCount= "";
    b22();
 }
 if (click22b == 0) {
    document.getElementById('a22').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click22d == 0) {
    document.getElementById('a22').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click22o == 0) {
    document.getElementById('a22').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b22() {

 if (document.getElementById('a22').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click22b = 4;
  }
 
 if (document.getElementById('a22').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click22d = 3;
  }
    
 if (document.getElementById('a22').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click22o = 2;
 }}                          

 function a23() {
    click23b -= 1;
    click23d -= 1;
    click23o -= 1;
  if (document.getElementById('a23').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a23').src= items[numero23];
    b23();
 }
 if (document.getElementById('a23').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a23').src= suerte[numeros2];
    document.getElementById('a23').style.animationName= "";
    document.getElementById('a23').style.animationDuration= "";
    document.getElementById('a23').style.animationIterationCount= "";
    b23();
 }
 if (click23b == 0) {
    document.getElementById('a23').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click23d == 0) {
    document.getElementById('a23').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click23o == 0) {
    document.getElementById('a23').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b23() {

 if (document.getElementById('a23').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click23b = 4;
  }
 
 if (document.getElementById('a23').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click23d = 3;
  }
    
 if (document.getElementById('a23').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click23o = 2;
 }}                         

 function a24() {
    click24b -= 1;
    click24d -= 1;
    click24o -= 1;
  if (document.getElementById('a24').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a24').src= items[numero24];
    b24();
 }
 if (document.getElementById('a24').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a24').src= suerte[numeros3];
    document.getElementById('a24').style.animationName= "";
    document.getElementById('a24').style.animationDuration= "";
    document.getElementById('a24').style.animationIterationCount= "";
    b24();
 }
 if (click24b == 0) {
    document.getElementById('a24').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click24d == 0) {
    document.getElementById('a24').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click24o == 0) {
    document.getElementById('a24').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b24() {

 if (document.getElementById('a24').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click24b = 4;
  }
 
 if (document.getElementById('a24').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click24d = 3;
  }
    
 if (document.getElementById('a24').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click24o = 2;
 }}                         

 function a25() {
    click25b -= 1;
    click25d -= 1;
    click25o -= 1;
  if (document.getElementById('a25').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a25').src= items[numero25];
    b25();
 }
 if (document.getElementById('a25').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a25').src= suerte[numeros1];
    document.getElementById('a25').style.animationName= "";
    document.getElementById('a25').style.animationDuration= "";
    document.getElementById('a25').style.animationIterationCount= "";
    b25();
 }
 if (click25b == 0) {
    document.getElementById('a25').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click25d == 0) {
    document.getElementById('a25').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click25o == 0) {
    document.getElementById('a25').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b25() {

 if (document.getElementById('a25').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click25b = 4;
  }
 
 if (document.getElementById('a25').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click25d = 3;
  }
    
 if (document.getElementById('a25').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click25o = 2;
 }}                         

 function a26() {
    click26b -= 1;
    click26d -= 1;
    click26o -= 1;
  if (document.getElementById('a26').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a26').src= items[numero26];
    b26();
 }
 if (document.getElementById('a26').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a26').src= suerte[numeros2];
    document.getElementById('a26').style.animationName= "";
    document.getElementById('a26').style.animationDuration= "";
    document.getElementById('a26').style.animationIterationCount= "";
    b26();
 }
 if (click26b == 0) {
    document.getElementById('a26').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click26d == 0) {
    document.getElementById('a26').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click26o == 0) {
    document.getElementById('a26').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b26() {

 if (document.getElementById('a26').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click26b = 4;
  }
 
 if (document.getElementById('a26').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click26d = 3;
  }
    
 if (document.getElementById('a26').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click26o = 2;
 }}                         

 function a27() {
    click27b -= 1;
    click27d -= 1;
    click27o -= 1;
  if (document.getElementById('a27').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a27').src= items[numero27];
    b27();
 }
 if (document.getElementById('a27').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a27').src= suerte[numeros3];
    document.getElementById('a27').style.animationName= "";
    document.getElementById('a27').style.animationDuration= "";
    document.getElementById('a27').style.animationIterationCount= "";
    b27();
 }
 if (click27b == 0) {
    document.getElementById('a27').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click27d == 0) {
    document.getElementById('a27').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click27o == 0) {
    document.getElementById('a27').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b27() {

 if (document.getElementById('a27').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click27b = 4;
  }
 
 if (document.getElementById('a27').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click27d = 3;
  }
    
 if (document.getElementById('a27').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click27o = 2;
 }}                        


function a28() {
    click28b -= 1;
    click28d -= 1;
    click28o -= 1;
  if (document.getElementById('a28').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a28').src= items[numero28];
    b28();
 }
 if (document.getElementById('a28').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a28').src= suerte[numeros1];
    document.getElementById('a28').style.animationName= "";
    document.getElementById('a28').style.animationDuration= "";
    document.getElementById('a28').style.animationIterationCount= "";
    b28();
 }
 if (click28b == 0) {
    document.getElementById('a28').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click28d == 0) {
    document.getElementById('a28').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click28o == 0) {
    document.getElementById('a28').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 
 function b28() {

 if (document.getElementById('a28').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click28b = 4;
  }
 
 if (document.getElementById('a28').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click28d = 3;
  }
    
 if (document.getElementById('a28').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click28o = 2;
 }}                          

 function a29() {
    click29b -= 1;
    click29d -= 1;
    click29o -= 1;
  if (document.getElementById('a29').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a29').src= items[numero29];
    b29();
 }
 if (document.getElementById('a29').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a29').src= suerte[numeros2];
    document.getElementById('a29').style.animationName= "";
    document.getElementById('a29').style.animationDuration= "";
    document.getElementById('a29').style.animationIterationCount= "";
    b29();
 }
 if (click29b == 0) {
    document.getElementById('a29').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click29d == 0) {
    document.getElementById('a29').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click29o == 0) {
    document.getElementById('a29').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b29() {

 if (document.getElementById('a29').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click29b = 4;
  }
 
 if (document.getElementById('a29').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click29d = 3;
  }
    
 if (document.getElementById('a29').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click29o = 2;
 }}                          

 function a30() {
    click30b -= 1;
    click30d -= 1;
    click30o -= 1;
  if (document.getElementById('a30').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a30').src= items[numero30];
    b30();
 }
 if (document.getElementById('a30').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a30').src= suerte[numeros3];
    document.getElementById('a30').style.animationName= "";
    document.getElementById('a30').style.animationDuration= "";
    document.getElementById('a30').style.animationIterationCount= "";
    b30();
 }
 if (click30b == 0) {
    document.getElementById('a30').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click30d == 0) {
    document.getElementById('a30').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click30o == 0) {
    document.getElementById('a30').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b30() {

 if (document.getElementById('a30').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click30b = 4;
  }
 
 if (document.getElementById('a30').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click30d = 3;
  }
    
 if (document.getElementById('a30').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click30o = 2;
 }}                          

 function a31() {
    click31b -= 1;
    click31d -= 1;
    click31o -= 1;
  if (document.getElementById('a31').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a31').src= items[numero31];
    b31();
 }
 if (document.getElementById('a31').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a31').src= suerte[numeros1];
    document.getElementById('a31').style.animationName= "";
    document.getElementById('a31').style.animationDuration= "";
    document.getElementById('a31').style.animationIterationCount= "";
    b31();
 }
 if (click31b == 0) {
    document.getElementById('a31').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click31d == 0) {
    document.getElementById('a31').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click31o == 0) {
    document.getElementById('a31').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b31() {

 if (document.getElementById('a31').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click31b = 4;
  }
 
 if (document.getElementById('a31').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click31d = 3;
  }
    
 if (document.getElementById('a31').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click31o = 2;
 }}                          

 function a32() {
    click32b -= 1;
    click32d -= 1;
    click32o -= 1;
  if (document.getElementById('a32').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a32').src= items[numero32];
    b32();
 }
 if (document.getElementById('a32').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a32').src= suerte[numeros2];
    document.getElementById('a32').style.animationName= "";
    document.getElementById('a32').style.animationDuration= "";
    document.getElementById('a32').style.animationIterationCount= "";
    b32();
 }
 if (click32b == 0) {
    document.getElementById('a32').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click32d == 0) {
    document.getElementById('a32').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click32o == 0) {
    document.getElementById('a32').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b32() {

 if (document.getElementById('a32').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click32b = 4;
  }
 
 if (document.getElementById('a32').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click32d = 3;
  }
    
 if (document.getElementById('a32').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click32o = 2;
 }}                         

 function a33() {
    click33b -= 1;
    click33d -= 1;
    click33o -= 1;
  if (document.getElementById('a33').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a33').src= items[numero33];
    b33();
 }
 if (document.getElementById('a33').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a33').src= suerte[numeros3];
    document.getElementById('a33').style.animationName= "";
    document.getElementById('a33').style.animationDuration= "";
    document.getElementById('a33').style.animationIterationCount= "";
    b33();
 }
 if (click33b == 0) {
    document.getElementById('a33').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click33d == 0) {
    document.getElementById('a33').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click33o == 0) {
    document.getElementById('a33').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b33() {

 if (document.getElementById('a33').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click33b = 4;
  }
 
 if (document.getElementById('a33').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click33d = 3;
  }
    
 if (document.getElementById('a33').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click33o = 2;
 }}                         

 function a34() {
    click34b -= 1;
    click34d -= 1;
    click34o -= 1;
  if (document.getElementById('a34').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a34').src= items[numero34];
    b34();
 }
 if (document.getElementById('a34').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a34').src= suerte[numeros1];
    document.getElementById('a34').style.animationName= "";
    document.getElementById('a34').style.animationDuration= "";
    document.getElementById('a34').style.animationIterationCount= "";
    b34();
 }
 if (click34b == 0) {
    document.getElementById('a34').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click34d == 0) {
    document.getElementById('a34').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click34o == 0) {
    document.getElementById('a34').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b34() {

 if (document.getElementById('a34').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click34b = 4;
  }
 
 if (document.getElementById('a34').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click34d = 3;
  }
    
 if (document.getElementById('a34').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click34o = 2;
 }}                         

 function a35() {
    click35b -= 1;
    click35d -= 1;
    click35o -= 1;
  if (document.getElementById('a35').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a35').src= items[numero35];
    b35();
 }
 if (document.getElementById('a35').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a35').src= suerte[numeros2];
    document.getElementById('a35').style.animationName= "";
    document.getElementById('a35').style.animationDuration= "";
    document.getElementById('a35').style.animationIterationCount= "";
    b35();
 }
 if (click35b == 0) {
    document.getElementById('a35').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click35d == 0) {
    document.getElementById('a35').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click35o == 0) {
    document.getElementById('a35').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b35() {

 if (document.getElementById('a35').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click35b = 4;
  }
 
 if (document.getElementById('a35').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click35d = 3;
  }
    
 if (document.getElementById('a35').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click35o = 2;
 }}                         

 function a36() {
    click36b -= 1;
    click36d -= 1;
    click36o -= 1;
  if (document.getElementById('a36').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a36').src= items[numero36];
    b36();
 }
 if (document.getElementById('a36').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a36').src= suerte[numeros3];
    document.getElementById('a36').style.animationName= "";
    document.getElementById('a36').style.animationDuration= "";
    document.getElementById('a36').style.animationIterationCount= "";
    b36();
 }
 if (click36b == 0) {
    document.getElementById('a36').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click36d == 0) {
    document.getElementById('a36').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click36o == 0) {
    document.getElementById('a36').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b36() {

 if (document.getElementById('a36').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click36b = 4;
  }
 
 if (document.getElementById('a36').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click36d = 3;
  }
    
 if (document.getElementById('a36').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click36o = 2;
 }}                        


function a37() {
    click37b -= 1;
    click37d -= 1;
    click37o -= 1;
  if (document.getElementById('a37').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a37').src= items[numero37];
    b37();
 }
 if (document.getElementById('a37').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a37').src= suerte[numeros1];
    document.getElementById('a37').style.animationName= "";
    document.getElementById('a37').style.animationDuration= "";
    document.getElementById('a37').style.animationIterationCount= "";
    b37();
 }
 if (click37b == 0) {
    document.getElementById('a37').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click37d == 0) {
    document.getElementById('a37').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click37o == 0) {
    document.getElementById('a37').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 
 function b37() {

 if (document.getElementById('a37').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click37b = 4;
  }
 
 if (document.getElementById('a37').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click37d = 3;
  }
    
 if (document.getElementById('a37').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click37o = 2;
 }}                          

 function a38() {
    click38b -= 1;
    click38d -= 1;
    click38o -= 1;
  if (document.getElementById('a38').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a38').src= items[numero38];
    b38();
 }
 if (document.getElementById('a38').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a38').src= suerte[numeros2];
    document.getElementById('a38').style.animationName= "";
    document.getElementById('a38').style.animationDuration= "";
    document.getElementById('a38').style.animationIterationCount= "";
    b38();
 }
 if (click38b == 0) {
    document.getElementById('a38').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click38d == 0) {
    document.getElementById('a38').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click38o == 0) {
    document.getElementById('a38').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b38() {

 if (document.getElementById('a38').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click38b = 4;
  }
 
 if (document.getElementById('a38').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click38d = 3;
  }
    
 if (document.getElementById('a38').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click38o = 2;
 }}                          

 function a39() {
    click39b -= 1;
    click39d -= 1;
    click39o -= 1;
  if (document.getElementById('a39').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a39').src= items[numero39];
    b39();
 }
 if (document.getElementById('a39').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a39').src= suerte[numeros3];
    document.getElementById('a39').style.animationName= "";
    document.getElementById('a39').style.animationDuration= "";
    document.getElementById('a39').style.animationIterationCount= "";
    b39();
 }
 if (click39b == 0) {
    document.getElementById('a39').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click39d == 0) {
    document.getElementById('a39').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click39o == 0) {
    document.getElementById('a39').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b39() {

 if (document.getElementById('a39').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click39b = 4;
  }
 
 if (document.getElementById('a39').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click39d = 3;
  }
    
 if (document.getElementById('a39').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click39o = 2;
 }}                          

 function a40() {
    click40b -= 1;
    click40d -= 1;
    click40o -= 1;
  if (document.getElementById('a40').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a40').src= items[numero40];
    b40();
 }
 if (document.getElementById('a40').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a40').src= suerte[numeros1];
    document.getElementById('a40').style.animationName= "";
    document.getElementById('a40').style.animationDuration= "";
    document.getElementById('a40').style.animationIterationCount= "";
    b40();
 }
 if (click40b == 0) {
    document.getElementById('a40').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click40d == 0) {
    document.getElementById('a40').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click40o == 0) {
    document.getElementById('a40').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b40() {

 if (document.getElementById('a40').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click40b = 4;
  }
 
 if (document.getElementById('a40').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click40d = 3;
  }
    
 if (document.getElementById('a40').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click40o = 2;
 }}                          

 function a41() {
    click41b -= 1;
    click41d -= 1;
    click41o -= 1;
  if (document.getElementById('a41').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a41').src= items[numero41];
    b41();
 }
 if (document.getElementById('a41').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a41').src= suerte[numeros2];
    document.getElementById('a41').style.animationName= "";
    document.getElementById('a41').style.animationDuration= "";
    document.getElementById('a41').style.animationIterationCount= "";
    b41();
 }
 if (click41b == 0) {
    document.getElementById('a41').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click41d == 0) {
    document.getElementById('a41').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click41o == 0) {
    document.getElementById('a41').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b41() {

 if (document.getElementById('a41').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click41b = 4;
  }
 
 if (document.getElementById('a41').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click41d = 3;
  }
    
 if (document.getElementById('a41').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click41o = 2;
 }}                         

 function a42() {
    click42b -= 1;
    click42d -= 1;
    click42o -= 1;
  if (document.getElementById('a42').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a42').src= items[numero42];
    b42();
 }
 if (document.getElementById('a42').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a42').src= suerte[numeros3];
    document.getElementById('a42').style.animationName= "";
    document.getElementById('a42').style.animationDuration= "";
    document.getElementById('a42').style.animationIterationCount= "";
    b42();
 }
 if (click42b == 0) {
    document.getElementById('a42').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click42d == 0) {
    document.getElementById('a42').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click42o == 0) {
    document.getElementById('a42').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b42() {

 if (document.getElementById('a42').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click42b = 4;
  }
 
 if (document.getElementById('a42').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click42d = 3;
  }
    
 if (document.getElementById('a42').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click42o = 2;
 }}                         

 function a43() {
    click43b -= 1;
    click43d -= 1;
    click43o -= 1;
  if (document.getElementById('a43').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a43').src= items[numero43];
    b43();
 }
 if (document.getElementById('a43').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a43').src= suerte[numeros1];
    document.getElementById('a43').style.animationName= "";
    document.getElementById('a43').style.animationDuration= "";
    document.getElementById('a43').style.animationIterationCount= "";
    b43();
 }
 if (click43b == 0) {
    document.getElementById('a43').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click43d == 0) {
    document.getElementById('a43').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click43o == 0) {
    document.getElementById('a43').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b43() {

 if (document.getElementById('a43').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click43b = 4;
  }
 
 if (document.getElementById('a43').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click43d = 3;
  }
    
 if (document.getElementById('a43').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click43o = 2;
 }}                         

 function a44() {
    click44b -= 1;
    click44d -= 1;
    click44o -= 1;
  if (document.getElementById('a44').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a44').src= items[numero44];
    b44();
 }
 if (document.getElementById('a44').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a44').src= suerte[numeros2];
    document.getElementById('a44').style.animationName= "";
    document.getElementById('a44').style.animationDuration= "";
    document.getElementById('a44').style.animationIterationCount= "";
    b44();
 }
 if (click44b == 0) {
    document.getElementById('a44').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click44d == 0) {
    document.getElementById('a44').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click44o == 0) {
    document.getElementById('a44').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b44() {

 if (document.getElementById('a44').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click44b = 4;
  }
 
 if (document.getElementById('a44').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click44d = 3;
  }
    
 if (document.getElementById('a44').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click44o = 2;
 }}                         

 function a45() {
    click45b -= 1;
    click45d -= 1;
    click45o -= 1;
  if (document.getElementById('a45').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a45').src= items[numero45];
    b45();
 }
 if (document.getElementById('a45').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a45').src= suerte[numeros3];
    document.getElementById('a45').style.animationName= "";
    document.getElementById('a45').style.animationDuration= "";
    document.getElementById('a45').style.animationIterationCount= "";
    b45();
 }
 if (click45b == 0) {
    document.getElementById('a45').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click45d == 0) {
    document.getElementById('a45').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click45o == 0) {
    document.getElementById('a45').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b45() {

 if (document.getElementById('a45').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click45b = 4;
  }
 
 if (document.getElementById('a45').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click45d = 3;
  }
    
 if (document.getElementById('a45').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click45o = 2;
 }}                        


function a46() {
    click46b -= 1;
    click46d -= 1;
    click46o -= 1;
  if (document.getElementById('a46').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a46').src= items[numero46];
    b46();
 }
 if (document.getElementById('a46').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a46').src= suerte[numeros1];
    document.getElementById('a46').style.animationName= "";
    document.getElementById('a46').style.animationDuration= "";
    document.getElementById('a46').style.animationIterationCount= "";
    b46();
 }
 if (click46b == 0) {
    document.getElementById('a46').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click46d == 0) {
    document.getElementById('a46').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click46o == 0) {
    document.getElementById('a46').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 
 function b46() {

 if (document.getElementById('a46').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click46b = 4;
  }
 
 if (document.getElementById('a46').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click46d = 3;
  }
    
 if (document.getElementById('a46').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click46o = 2;
 }}                          

 function a47() {
    click47b -= 1;
    click47d -= 1;
    click47o -= 1;
  if (document.getElementById('a47').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a47').src= items[numero47];
    b47();
 }
 if (document.getElementById('a47').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a47').src= suerte[numeros2];
    document.getElementById('a47').style.animationName= "";
    document.getElementById('a47').style.animationDuration= "";
    document.getElementById('a47').style.animationIterationCount= "";
    b47();
 }
 if (click47b == 0) {
    document.getElementById('a47').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click47d == 0) {
    document.getElementById('a47').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click47o == 0) {
    document.getElementById('a47').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b47() {

 if (document.getElementById('a47').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click47b = 4;
  }
 
 if (document.getElementById('a47').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click47d = 3;
  }
    
 if (document.getElementById('a47').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click47o = 2;
 }}                          

 function a48() {
    click48b -= 1;
    click48d -= 1;
    click48o -= 1;
  if (document.getElementById('a48').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a48').src= items[numero48];
    b48();
 }
 if (document.getElementById('a48').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a48').src= suerte[numeros3];
    document.getElementById('a48').style.animationName= "";
    document.getElementById('a48').style.animationDuration= "";
    document.getElementById('a48').style.animationIterationCount= "";
    b48();
 }
 if (click48b == 0) {
    document.getElementById('a48').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click48d == 0) {
    document.getElementById('a48').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click48o == 0) {
    document.getElementById('a48').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b48() {

 if (document.getElementById('a48').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click48b = 4;
  }
 
 if (document.getElementById('a48').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click48d = 3;
  }
    
 if (document.getElementById('a48').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click48o = 2;
 }}                          

 function a49() {
    click49b -= 1;
    click49d -= 1;
    click49o -= 1;
  if (document.getElementById('a49').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a49').src= items[numero49];
    b49();
 }
 if (document.getElementById('a49').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a49').src= suerte[numeros1];
    document.getElementById('a49').style.animationName= "";
    document.getElementById('a49').style.animationDuration= "";
    document.getElementById('a49').style.animationIterationCount= "";
    b49();
 }
 if (click49b == 0) {
    document.getElementById('a49').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click49d == 0) {
    document.getElementById('a49').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click49o == 0) {
    document.getElementById('a49').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b49() {

 if (document.getElementById('a49').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click49b = 4;
  }
 
 if (document.getElementById('a49').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click49d = 3;
  }
    
 if (document.getElementById('a49').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click49o = 2;
 }}                          

 function a50() {
    click50b -= 1;
    click50d -= 1;
    click50o -= 1;
  if (document.getElementById('a50').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a50').src= items[numero50];
    b50();
 }
 if (document.getElementById('a50').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a50').src= suerte[numeros2];
    document.getElementById('a50').style.animationName= "";
    document.getElementById('a50').style.animationDuration= "";
    document.getElementById('a50').style.animationIterationCount= "";
    b50();
 }
 if (click50b == 0) {
    document.getElementById('a50').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click50d == 0) {
    document.getElementById('a50').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click50o == 0) {
    document.getElementById('a50').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b50() {

 if (document.getElementById('a50').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click50b = 4;
  }
 
 if (document.getElementById('a50').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click50d = 3;
  }
    
 if (document.getElementById('a50').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click50o = 2;
 }}                         

 function a51() {
    click51b -= 1;
    click51d -= 1;
    click51o -= 1;
  if (document.getElementById('a51').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a51').src= items[numero51];
    b51();
 }
 if (document.getElementById('a51').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a51').src= suerte[numeros3];
    document.getElementById('a51').style.animationName= "";
    document.getElementById('a51').style.animationDuration= "";
    document.getElementById('a51').style.animationIterationCount= "";
    b51();
 }
 if (click51b == 0) {
    document.getElementById('a51').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click51d == 0) {
    document.getElementById('a51').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click51o == 0) {
    document.getElementById('a51').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b51() {

 if (document.getElementById('a51').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click51b = 4;
  }
 
 if (document.getElementById('a51').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click51d = 3;
  }
    
 if (document.getElementById('a51').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click51o = 2;
 }}                         

 function a52() {
    click52b -= 1;
    click52d -= 1;
    click52o -= 1;
  if (document.getElementById('a52').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a52').src= items[numero52];
    b52();
 }
 if (document.getElementById('a52').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a52').src= suerte[numeros1];
    document.getElementById('a52').style.animationName= "";
    document.getElementById('a52').style.animationDuration= "";
    document.getElementById('a52').style.animationIterationCount= "";
    b52();
 }
 if (click52b == 0) {
    document.getElementById('a52').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click52d == 0) {
    document.getElementById('a52').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click52o == 0) {
    document.getElementById('a52').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b52() {

 if (document.getElementById('a52').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click52b = 4;
  }
 
 if (document.getElementById('a52').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click52d = 3;
  }
    
 if (document.getElementById('a52').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click52o = 2;
 }}                         

 function a53() {
    click53b -= 1;
    click53d -= 1;
    click53o -= 1;
  if (document.getElementById('a53').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a53').src= items[numero44];
    b53();
 }
 if (document.getElementById('a53').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a53').src= suerte[numeros2];
    document.getElementById('a53').style.animationName= "";
    document.getElementById('a53').style.animationDuration= "";
    document.getElementById('a53').style.animationIterationCount= "";
    b53();
 }
 if (click53b == 0) {
    document.getElementById('a53').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click53d == 0) {
    document.getElementById('a53').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click53o == 0) {
    document.getElementById('a53').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b53() {

 if (document.getElementById('a53').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click53b = 4;
  }
 
 if (document.getElementById('a53').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click53d = 3;
  }
    
 if (document.getElementById('a53').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click53o = 2;
 }}                         

 function a54() {
    click54b -= 1;
    click54d -= 1;
    click54o -= 1;
  if (document.getElementById('a54').src == "https://i.ibb.co/8KBVgbZ/sinfondo.png") {
    document.getElementById('a54').src= items[numero45];
    b54();
 }
 if (document.getElementById('a54').src == "https://i.ibb.co/TLs8dN5/destello.png") {
    document.getElementById('a54').src= suerte[numeros3];
    document.getElementById('a54').style.animationName= "";
    document.getElementById('a54').style.animationDuration= "";
    document.getElementById('a54').style.animationIterationCount= "";
    b54();
 }
 if (click54b == 0) {
    document.getElementById('a54').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 4;
    bitcoin += 1;
    dibujarscore();
    
 }
 if (click54d == 0) {
    document.getElementById('a54').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 3;
    diamante += 1;
    dibujarscore();
    
 }
 if (click54o == 0) {
    document.getElementById('a54').src= "https://i.ibb.co/VL5kPMc/tierra.jpg";
    puntos += 2;
    oro+= 1;
    dibujarscore();
    
 }}  
 function b54() {

 if (document.getElementById('a54').src == "https://i.ibb.co/hRrsJ5P/bitcoin.jpg") {
    click54b = 4;
  }
 
 if (document.getElementById('a54').src == "https://i.ibb.co/cvST1m8/diamante.jpg") {
    click54d = 3;
  }
    
 if (document.getElementById('a54').src == "https://i.ibb.co/0jqRTQJ/oro.jpg") {
    click54o = 2;
 }}
 function dibujarscore1() {

    document.getElementById('scorefinal').style.display="block";


    document.getElementById('score1').innerHTML = "Total = " + puntos;
    document.getElementById('score1').style.animationName="animaciontexto";
    document.getElementById('score1').style.animationDuration="1s";


    document.getElementById('bitcoin1').innerHTML = "4 x "+ bitcoin;
    document.getElementById('bitcoin1').style.animationName="animaciontexto";
    document.getElementById('bitcoin1').style.animationDuration="1s";


    document.getElementById('diamante1').innerHTML = "3 x "+ diamante;
    document.getElementById('diamante1').style.animationName="animaciontexto";
    document.getElementById('diamante1').style.animationDuration="1s";
    

    document.getElementById('oro1').innerHTML = "2 x "+ oro; 
    document.getElementById('oro1').style.animationName="animaciontexto";
    document.getElementById('oro1').style.animationDuration="1s";

    document.getElementById('oro').style.animationName="animaciontexto";
    document.getElementById('oro').style.animationDuration="1s";

    document.getElementById('score').style.animationName="animaciontexto";
    document.getElementById('score').style.animationDuration="1s";

    document.getElementById('diamante').style.animationName="animaciontexto";
    document.getElementById('diamante').style.animationDuration="1s";

    document.getElementById('bitcoin').style.animationName="animaciontexto";
    document.getElementById('bitcoin').style.animationDuration="1s";
}                   