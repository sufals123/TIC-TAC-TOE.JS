let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector(".new-btn");
let msg = document.querySelector(".msg");
let player = true; // player0 playerX


let winPatterns = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];



boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
    
            if(player){
                box.innerHTML = "X";
                player = false;
            }else{
                box.innerHTML = "O";
                player = true;
            }
            box.disabled = true;
            checkWinner();
        
    });  
});


const enabledBoxs = ()=>{
    for(let box of boxs){
        box.disabled = false;
        box.innerText = "";
    }
}

const disabledBoxs = ()=>{
    boxs.forEach((box)=>{
        box.disabled = true;
    });
}


const showWinner = (winner)=>{
    msg.innerHTML =`Winner: ${winner}`
    msg.classList.remove("hidden");
    newBtn.classList.remove("hidden");
    disabledBoxs();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Value = boxs[pattern[0] - 1].innerText;
        let pos2Value = boxs[pattern[1] - 1].innerText;
        let pos3Value = boxs[pattern[2] - 1].innerText;

        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                showWinner(pos1Value);
            }
        }
    }
};


newBtn.addEventListener("click", ()=>{
    enabledBoxs();
    msg.classList.add("hidden");
    newBtn.classList.add("hidden");
});

resetBtn.addEventListener("click", ()=>{
    enabledBoxs();
    msg.classList.add("hidden");
    newBtn.classList.add("hidden");
});






