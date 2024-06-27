let input =document.querySelector('.input');
let buttons=document.querySelectorAll('.btn');
let solve=document.querySelector('.solve');
let clearall=document.querySelector('.clearall');
let ans,inputedtext;

buttons.forEach((button)=>{
     button.addEventListener('click',()=>{
        if(button.innerHTML== "="){
            solveans(input.value);
         }
         else if(input.value=="ERROR"){
              input.value="";
              input.value=input.value+button.innerHTML;
         }
         else{
            input.value=input.value+button.innerHTML; 
         }
})  
})
clearall.addEventListener('click',()=>{
    input.value="";
})

function solveans(inputedtext){
    try{
    ans= eval(inputedtext);
    input.value=ans;}
    catch(err){
        input.value="ERROR"
        console.log("some error occured:",err);
    }
}
