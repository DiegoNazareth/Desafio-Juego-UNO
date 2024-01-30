//variables
let numeroMaximoPosible=100
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible+1);
let numeroUsuario = 0;
let intento=1;
//let palabraVeces='vez';
let maximosIntentos=6;

while (numeroSecreto != numeroUsuario) {
  let numeroUsuario = parseInt( prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} porfavor:` ));
  //alert('Hola Mundo');

  console.log(typeof(numeroUsuario));

  /*
Este codigo realiza la comparacion 
*/
  if (numeroSecreto == numeroUsuario) {
    //Acertamos fue verdadera la condicion
    alert(`Acertarste el numero, el numero es: ${numeroSecreto}. Los hiciste en ${intento} ${intento==1 ? 'vez' : 'veces'}`);
    break;
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero secreto es menor");
    } else {
      alert("El numero secreto es mayor");
    }
    if(intento>=maximosIntentos){
      alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
      break;
    }
    //Incrementamos el contador cuando no acierta
    //intento=intento+1;
    intento++;
    
    //palabraVeces='veces';
    //La condicion no se cumplio
    alert("Lo siento no acertarste el numero");
  }
}
