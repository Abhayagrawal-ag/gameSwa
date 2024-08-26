const guess=document.querySelector("#guess");
const submit=document.querySelector("#submit");
let count=3;
const remain=document.querySelector("#Remain")
remain.innerHTML=`${count}`;
let prev=[];
submit.addEventListener("click",function(e){ 
if (count>0){  
const number=parseInt(document.querySelector("#number").value);
        if(number==10){
            const result=document.querySelector("#result");
            result.innerHTML="chupa lu tujhko apni bahhon mei is tarah ki hava bhi gujarne ki ijajat mange, madhosh ho jaun tere payar mei is tarh ki hosh bhi anne ki ijajat mange";   
            count=1;  
        }
     else if(number<=20){
        const previous=document.querySelector("#Previous");
        previous.innerHTML=  prev + "  " + `${number}` ;
        prev= prev + "  " + `${number}`;
    }
    else{
        const result2=document.querySelector("#Previous");
        result2.innerHTML="Enter,valid no."
    }
    count--;
}
else{
    const result=document.querySelector("#result");
    result.innerHTML="Baby, Game Over"
}
const Remain=document.querySelector("#Remain")
Remain.innerHTML=`${count}`; 
})

