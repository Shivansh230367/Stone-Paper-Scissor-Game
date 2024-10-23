const opts =document.querySelectorAll(".photo");
let userscr=0;let compscr=0;let compchoice;let userchoice;



opts.forEach((choices) => {
    choices.addEventListener("click",() => {
    
    userchoice = choices.getAttribute("id");
    console.log("dabaya gaya",userchoice);
    random(userchoice);
    logic();
    update();
}
    )});
    const button =document.querySelectorAll("#but");

button.forEach((choices) => {
    choices.addEventListener("click",() => {
        userscr=0;
        compscr=0;
        update();

    
}
    )});
    
const logic = () =>{
    if (userchoice==="rock" && compchoice==="paper")
        compscr++;
    else if(userchoice==="rock" && compchoice==="scissor")
userscr++;
    else if(userchoice==="paper" && compchoice==="rock")
        userscr++;
    else if(userchoice==="scissor" && compchoice==="rock")
        compscr++;
    else if(userchoice==="paper" && compchoice==="scissor")
        compscr++;
    else if(userchoice==="scissor" && compchoice==="paper")
        userscr++;
else
alert("Both choosed same option");
}
const random=(userchoice)=>{

compchoice=Math.floor(Math.random() * 2);
if(compchoice==0)
    compchoice="rock";
else if(compchoice==1)
    compchoice="paper";
else
compchoice="scissor";
return userchoice;
}
const update=()=>{
    
        const scr=document.querySelector("#score_me")
    scr.innerText=userscr;
    const scrcomp=document.querySelector("#score_comp")
    scrcomp.innerText=compscr;
}