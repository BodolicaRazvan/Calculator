let input=document.getElementById('inputValue');

let calc=(number)=>{
    input.value=input.value+number;
}

let result=()=>{
    try{
        input.value=eval(input.value)
    }
    catch(err){
        alert("Invalid input");
    }
}

function cl(){
    input.value="";
}

function del(){
    input.value=input.value.slice(0,-1);
}