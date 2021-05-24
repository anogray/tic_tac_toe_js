const Game = ()=>{

let flag = 1;
let won = 0;

const allClickCol = ()=>{
    
   let val1, val2, val3, val4, val5, val6, val7, val8, val9;
   
   val1 = b1.value;
   val2 = b2.value;
   val3 = b3.value;
   val4 = b4.value;
   val5 = b5.value;
   val6 = b6.value;
   val7 = b7.value;
   val8 = b8.value;
   val9 = b9.value;

   const disableAll = ()=>{
       b1.disabled=true; b2.disabled=true; b3.disabled=true; b4.disabled=true; b5.disabled=true; b6.disabled=true;
       b7.disabled=true; b8.disabled=true; b9.disabled=true;
   }

    if(val1 == "X" && val4 == "X" && val7 == "X"){
    prnt.innerText = "Player X won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player X Won !!"),0)
   }
   else if(val2 == "X" && val5 == "X" && val8 == "X"){
    prnt.innerText = "Player X won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player X Won !!"),0)
   }
   else if(val3 == "X" && val6 == "X" && val9 == "X"){
    prnt.innerText = "Player X won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player X Won !!"),0)
   }
   else if(val1 == "X" && val2 == "X" && val3 == "X"){
    prnt.innerText = "Player X won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player X Won !!"),0)
   }
   else if(val4 == "X" && val5 == "X" && val6 == "X"){
    prnt.innerText = "Player X won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player X Won !!"),0)
   }
   else if(val7 == "X" && val8 == "X" && val9 == "X"){
    prnt.innerText = "Player X won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player X Won !!"),0)
   }
   else if(val1 == "X" && val5 == "X" && val9 == "X"){
    prnt.innerText = "Player X won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player X Won !!"),0)
   }
   else if(val3 == "X" && val5 == "X" && val7 == "X"){
    prnt.innerText = "Player X won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player X Won !!"),0)
   }
   
   //0 player
   if(val1 == "O" && val4 == "O" && val7 == "O"){
    prnt.innerText = "Player O won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player 0 Won !!"),0)
   }
   else if(val2 == "O" && val5 == "O" && val8 == "O"){
    prnt.innerText = "Player O won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player 0 Won !!"),0)
   }
   else if(val3 == "O" && val6 == "O" && val9 == "O"){
    prnt.innerText = "Player O won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player 0 Won !!"),0)
   }
   else if(val1 == "O" && val2 == "O" && val3 == "O"){
    prnt.innerText = "Player O won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player 0 Won !!"),0)
   }
   else if(val4 == "O" && val5 == "O" && val6 == "O"){
    prnt.innerText = "Player O won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player 0 Won !!"),0)
   }
   else if(val7 == "O" && val8 == "O" && val9 == "O"){
    prnt.innerText = "Player O won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player 0 Won !!"),0)
   }
   else if(val1 == "O" && val5 == "O" && val9 == "O"){
    prnt.innerText = "Player O won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player 0 Won !!"),0)
   }
   else if(val3 == "O" && val5 == "O" && val7 == "O"){
    prnt.innerText = "Player O won";
    won=1;
    disableAll();
    setTimeout(()=>alert("Player 0 Won !!"),0)
   }

   //tie
   else if(val1.length>0 && val2.length>0 && val3.length>0 && val4.length>0 && val5.length>0 && val6.length>0
    && val7.length>0 && val8.length>0 && val9.length>0 && won==0){
        prnt.innerText = "Match Tied !!";
        setTimeout(()=>alert("Match Tied !!"),0)
        
    }
    
    //printing the next turn
    else if(flag == 1){
        prnt.innerText = "Player X Turn"; 
    }
    else{
        prnt.innerText = "Player 0 Turn";        
    }
}

//  playerMove() allClickCol() and listen all of the clicks at once

let btnArr = document.getElementsByClassName("col")
for(let i =0; i<btnArr.length; i++){
    console.log("i again at", i)
    btnArr[i].addEventListener("click",(e)=>{ 
        playerMove(e); 
        allClickCol();
    }
        );
}

// reset the game to listen click
resetBtn.addEventListener("click",resetGame)

//reset the game
function resetGame()
{
    console.log("reset btn clicked")
    location.reload();
}

//move the player
function playerMove(e) {

    if(!won)
    {
    switch (e.target.id) {

        case "b1":
            if(flag == 1){
                b1.value = "X"; 
                b1.disabled  = true; 
            }
            else{
                b1.value = "O"; 
                b1.disabled  = true; 
            }
            flag == 1 ? flag=0 : flag=1
            break;

        case "b2":            
            if(flag == 1){
                b2.value = "X"; 
                b2.disabled  = true; 
            }
            else{
                b2.value = "O"; 
                b2.disabled  = true; 
            }
            flag == 1 ? flag=0 : flag=1
            break;  
            
        case "b3":
            if(flag == 1){
                b3.value = "X"; 
                b3.disabled  = true; 
            }
            else{
                b3.value = "O"; 
                b3.disabled  = true; 
            }
            flag == 1 ? flag=0 : flag=1
            break;      

        case "b4":
            if(flag == 1){
                b4.value = "X"; 
                b4.disabled  = true; 
            }
            else{
                b4.value = "O"; 
                b4.disabled  = true; 
            }
            flag == 1 ? flag=0 : flag=1
            break;
            
        case "b5":
            if(flag == 1){
                b5.value = "X"; 
                b5.disabled  = true; 
            }
            else{
                b5.value = "O"; 
                b5.disabled  = true; 
            }
            flag == 1 ? flag=0 : flag=1
            break;            

        case "b6":
            if(flag == 1){
                b6.value = "X"; 
                b6.disabled  = true; 
            }
            else{
                b6.value = "O"; 
                b6.disabled  = true; 
            }
            flag == 1 ? flag=0 : flag=1
            break;

        case "b7":
            if(flag == 1){
                b7.value = "X"; 
                b7.disabled  = true; 
            }
            else{
                b7.value = "O"; 
                b7.disabled  = true; 
            }
            flag == 1 ? flag=0 : flag=1
            break;            

        case "b8":
            if(flag == 1){
                b8.value = "X"; 
                b8.disabled  = true; 
            }
            else{
                b8.value = "O"; 
                b8.disabled  = true; 
            }
            flag == 1 ? flag=0 : flag=1
            break;

        case "b9":
            if(flag == 1){
                b9.value = "X"; 
                b9.disabled  = true; 
            }
            else{
                b9.value = "O"; 
                b9.disabled  = true;
            }
            flag == 1 ? flag=0 : flag=1
            break;

        default:
            break;
    }}
}


}

Game()