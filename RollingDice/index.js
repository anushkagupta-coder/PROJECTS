
function rollDice() {
    const numOfDice=document.getElementById("numOfValue").value;
    const diceResult=document.getElementById("diceResult");
    const diceImage=document.getElementById("diceImage");
    const values=[];
    const images=[];

    for(let i=0;i<numOfDice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
    }
}