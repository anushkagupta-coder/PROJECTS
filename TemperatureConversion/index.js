//temperature conversion 

const textBox=document.getElementById("textBox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");
let temp;


function convert(){
    if(toFahrenheit.checked){
        result.textContent="You selected to Fahrenheit";
    }
    else if(toCelsius.checked){
        result.textContent="You selected to Celcius";
    }
    else{
        result.textContent="select a unit";
    }

}