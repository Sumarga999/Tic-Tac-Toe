let boxes=document.querySelectorAll(".box");
let restart=document.querySelector(".start");
let newgamebutton=document.querySelector(".new");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let drawmsg=document.querySelector("#no");
 let turnO=true;
 let moves=0;
 const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],    
 ];
 const resetgame=()=>{
    turnO=true;
    moves=0;
    enablebox();
    msgcontainer.classList.add("hide");
 }
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true; 
        }
        box.disabled=true;   
        moves++;
        checkwinner();
    });
 });
 const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;  
    }
 }
 const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;  
        box.innerText="";
    }
 }  
 const showwinner = (winner) => {
    msg.innerText=`The winner is ${winner}`;
    msgcontainer.classList.remove("hide");  
    disablebox();
 }
 const checkwinner=()=>{
    for(let pattern of patterns){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
     if(pos1 !="" &&pos2 !=""&&pos3 !=""){
        if(pos1===pos2 && pos2===pos3){
            console.log("winner",pos1); 
        showwinner(pos1);      
     } 
     }
    }
if(moves===9){
    msg.innerText = `It's a draw!`;
    msgcontainer.classList.remove("hide");
}
 };


newgamebutton.addEventListener("click",resetgame);
restart.addEventListener("click",resetgame);
