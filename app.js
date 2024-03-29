let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg"); 

resetbtn.addEventListener("click", ()=>{
    resetGame();
});

newGame.addEventListener("click", ()=>{
    resetGame();
});

let turnO = true;

const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText ="O";
            turnO =false;
        }else{
            box.innerText ="X";
            turnO=true;
        }
        box.disabled = true;
        box.style.backgroundColor ="lightGreen";

        checkWinner();
    });
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
        box.style.backgroundColor ="#ffffc7";
    }

};

const showWinner = (winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const checkWinner = ()=>{
    for(let pattern of patterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                disableBoxes();
            }
        }
    }
}

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};