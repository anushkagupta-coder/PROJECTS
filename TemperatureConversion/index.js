//temperature conversion 

const textBox=document.getElementById("textBox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");
let temp;


function convert(){
    if(toFahrenheit.checked){
        temp=Number(textBox.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+"F"
    }
    else if(toCelsius.checked){
        result.textContent="You selected to Celcius";
    }
    else{
        result.textContent="select a unit";
    }

}