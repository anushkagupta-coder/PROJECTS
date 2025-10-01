
function rollDice() {
    const numOfDice=document.getElementById("numOfValue").value;
    const diceResult=document.getElementById("diceResult");
    const diceImages=document.getElementById("diceImage");
    const values=[];
    const images=[];

    for(let i=0; i<numOfDice ; i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="DicePicture/${value}.png" alt="Dice ${value}">`);

    }
    diceResult.textContent=`dice: ${values.join(', ')}`;

    diceImages.innerHTML=images.join('');

}