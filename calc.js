var num1 = 0;
var num2 = 0;
var oparator;
var result;

var screen = document.getElementById('input');

function enterOnClick(button){

    screen.value+=button;
}
function clearMe(){
    screen.value="";
}

function myOparator(sign){
num1 = Number(screen.value);
oparator = sign;
clearMe();
}

function calc(){
    num2 = Number(screen.value);
    if(oparator=="+"){
       result =  num1+num2;
       screen.value = result;
       
       
    }else if(oparator=="-"){
        result =  num1-num2;
       screen.value = result;
    }else if(oparator=="*"){
        result =  num1*num2;
        screen.value = result;
    }else if(oparator=="/"){
        result =  num1/num2;
        screen.value = result;
    }
}