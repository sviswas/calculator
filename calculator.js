let clear=document.getElementById("C");
let dele=document.getElementById("DE");
let input_text=document.getElementById("input_id"); 
let equal=document.getElementById("=");
clear.addEventListener("click",function(){
    input_text.value="";
});
dele.addEventListener("click",function(){
    input_text.value=input_text.value.slice(0,-1);
});
function btn_click(value)
{
    if(input_text.value=="")
    {
    if(value=="%" ||value=="*" ||value=="/" ||value=="+" ||value=="-" ||value==".")
    {
        alert("Please enter any expression");
        return;
    }
}
    if(value==='0')
    {
        if(input_text.value==="")
        {
             input_text.value=value;    
        }  
        else if(input_text.value!=='0'){
            input_text.value=input_text.value+value;
        }
    }
    else{
        if(input_text.value==='0'){
            input_text.value=value;
        }
        else{
            input_text.value=input_text.value+value;
        }
       
    }
    
   
} 
equal.addEventListener("click",function(){
    input_text.value=eval(input_text.value);
});