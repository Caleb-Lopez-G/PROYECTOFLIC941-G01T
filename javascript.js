let PinAsh = '1234';
let Pin;
var Saldo = parseFloat(localStorage.getItem('saldoNuevo'));
var Deposito;
var Retiro;
var Pago;
var Tipo;
let D = parseInt(localStorage.getItem('totalD'));
var R = parseInt(localStorage.getItem('totalR'));
var P = parseInt(localStorage.getItem('totalP'));
let arrayTransacciones = [];
var selectedValue;


function ingresar(){
    
    localStorage.setItem('PinUsuario',  document.getElementById('Pin').value);
    Pin = localStorage.getItem('PinUsuario', ( document.getElementById('Pin').value));

    
    console.log(Pin);
    console.log(PinAsh);
    if(Pin / Pin != 1){
        swal('Solo se permiten numeros', 'Intente nuevamente','error');
    }else{
if (Pin == PinAsh){
    console.log("yes");
    swal('Bienvenido', 'Acceso permitido','success');
    location.href="Consultar.html";
    
    if ((Saldo/Saldo) !=1){
        Saldo = localStorage.setItem('saldoNuevo',500);
    }
}else{
    console.log("no");
    swal('Pin incorrecto', 'Intente nuevamente','error');
  }
}
}



function Depositar(){
   Deposito = document.getElementById('Deposito').value;
   Deposito = parseFloat(Deposito);
 
    Saldo = parseFloat(localStorage.getItem('saldoNuevo'));
    console.log(Saldo);

    if(Deposito>0 && Deposito % 5 == 0) {
        localStorage.setItem('saldoNuevo',  (Saldo = Saldo +Deposito));
    if ((D /D) != 1 ){
        localStorage.setItem('totalD', 1);
        D=  parseInt(localStorage.getItem('totalD'));
        console.log(D);
        console.log('no habia uno');
        swal('Deposito realizado', 'El proceso fue exitoso','success');
        pdfDeposito();

    }else{
        localStorage.setItem('totalD', D+1);
        D = D+1;
    console.log(D);
    console.log('ya habia uno');
    pdfDeposito();
    swal('Deposito realizado', 'El proceso fue exitoso','success');
    pdfDeposito();

    }
}else{
    swal('Deposito no realizado', 'Unicamente puede depositar cantidades en multiplos de 5','error');

    }

    
    
    

}


function Retirar(){
    Retiro = document.getElementById('Retiro').value;
    Retiro = parseFloat(Retiro);
    
     Saldo = parseFloat(localStorage.getItem('saldoNuevo'));
     console.log(Saldo);

     if(Retiro>0 && Retiro % 5 == 0) {
        localStorage.setItem('saldoNuevo',  (Saldo = Saldo - Retiro));
     if ((R /R) != 1 ){
        localStorage.setItem('totalR', 1);
        R=  parseInt(localStorage.getItem('totalR'));
        console.log(R);
        console.log('no habia uno');
        swal('Deposito realizado', 'El proceso fue exitoso','success');
    }else{
        localStorage.setItem('totalR', R+1);
        R = R+1;
    console.log(R);
    console.log('ya habia uno');
    swal('Deposito realizado', 'El proceso fue exitoso','success');
    }
     }else{
        swal('Retiro no realizado', 'Unicamente puede retirar cantidades en multiplos de 5','error');
     }
 }

 function Pagar(){
    Pago = document.getElementById('Pago').value;
    Pago = parseFloat(Pago);
    
     Saldo = parseFloat(localStorage.getItem('saldoNuevo'));
     console.log(Saldo);

     var selectedValue = document.getElementById("list").value;
     console.log(selectedValue);
if (selectedValue != "s"){


     if (Pago < Saldo){
        localStorage.setItem('saldoNuevo',  (Saldo = Saldo - Pago));

     if ((P /P) != 1 ){
    
        localStorage.setItem('totalP', 1);
        P=  parseInt(localStorage.getItem('totalP'));
        console.log(P);
        console.log('no habia uno');
        swal('Pago realizado', 'El pago fue exitoso','success');
    }else{
        localStorage.setItem('totalP', P+1);
        P = P+1;
    console.log(P);
    console.log('ya habia uno');
    swal('Pago realizado', 'El pago fue exitoso','success');
    }
     }else{
        swal('Pago no realizado', 'su saldo actual es insuficiente para realizar el pago','error');
     }
 }else{
    swal('Seleccione un servicio', 'No ha seleccionado un servicio','error');
 }
}



function pdfDeposito(){
var ltitle = " Comrpobante de deposito";
lCantidad = "monto: ";

var Cantidad = document.getElementById('Deposito').value;

var doc = new jsPDF();
doc.setFontSize(22);
doc.text(ltitle, 20, 10);
doc.setFontSize(16);
doc.text(lCantidad + ' ' + Cantidad, 10, 20);

}