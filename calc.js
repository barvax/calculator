var num1 = 0;
var num2 = 0;
var oparator;
var result;
var  isComplete = false;
var isFirtsNum = false;
var screen = document.getElementById('input');
var ron = [5,"+",6,"*",1]

function enterOnClick(button){

    if(isComplete){
        clearMe();
        isComplete=false;
    }else if(isFirtsNum){
        clearMe();
        isFirtsNum=false;
        
    }
    screen.value+=button;
}
function clearMe(){
    screen.value="";
}

function myOparator(sign){
num1 = Number(screen.value);
oparator = sign;
isFirtsNum = true;

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
    isFirtsNum=false;
    isComplete=true;
}

