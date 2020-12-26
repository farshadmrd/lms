//--------------------------------------------------------------------stars----------------------------------------------
let number1 = document.querySelectorAll("#div-number1 i");
let number2= document.querySelectorAll("#div-number2 i");
let number3= document.querySelectorAll("#div-number3 i");


$("#j1 span").hover(function(event){
     let i=$(event.target).attr("data-val");
    number1[i].style.visibility="visible";
},function (){
    for (let c=0;c<6;c++){
        number1[c].style.visibility="hidden";
    }
})
$("#j2 span").hover(function(event){
    let i=$(event.target).attr("data-val");
    number2[i].style.visibility="visible";
},function (){
    for (let c=0;c<6;c++){
        number2[c].style.visibility="hidden";
    }
})
$("#j3 span").hover(function(event){
    let i=$(event.target).attr("data-val");
    number3[i].style.visibility="visible";
},function (){
    for (let c=0;c<6;c++){
        number3[c].style.visibility="hidden";
    }
})
//--------------------------------------------------------------------stars----------------------------------------------

