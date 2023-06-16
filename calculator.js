let ans=0;
let s="";
document.getElementById("add").onclick=function(){
    let a=parseInt(document.getElementById("n1").value); 
    let b=document.getElementById("n1").value;
    if(b=="")
    {
        alert("Enter any number");
    }
    else{ 
        document.getElementById("n1").value=null;
        ans=ans+a;
        if(s.length==0)
            s=s+a;
        else
            s=s+("+"+a);
        document.getElementById("result").textContent=ans;
    }
   
}


document.getElementById("sub").onclick=function(){
    let a=parseInt(document.getElementById("n1").value);
    let b=document.getElementById("n1").value;
    if(b=="")
    {
        alert("Enter any number");
    }
    else{
        document.getElementById("n1").value=null;
        ans=ans-a;
        if(s.length==0)
            s=s+a;
        else
            s=s+("-"+a);
        document.getElementById("result").textContent=ans;
    }
}


document.getElementById("mul").onclick=function(){
    let a=parseInt(document.getElementById("n1").value);
    let b=document.getElementById("n1").value;
    if(b=="")
    {
        alert("Enter any number");
    }
    else{
        document.getElementById("n1").value=null;
        ans=ans*a;
        if(s.length==0)
            s=s+a;
        else
            s=s+("*"+a);
        document.getElementById("result").textContent=ans;
    }
}


document.getElementById("div").onclick=function(){
    let a=parseInt(document.getElementById("n1").value);
    let b=document.getElementById("n1").value;
    if(b=="")
    {
        alert("Enter any number");
    }
    else{
        document.getElementById("n1").value=null;
        ans=ans+a;
        if(s.length==0)
            s=s+a;
        else
            s=s+("/"+a);
        document.getElementById("result").textContent=ans;
    }
}

function equl(){
    document.getElementById("exp").textContent=s;
}