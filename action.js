const input=document.getElementById('inputValue');

calc = (number) =>{
    input.value=input.value + number;
}

result = () =>{
    try{
        const evaluation = eval(input.value);
        console.log(evaluation);
        if(evaluation == undefined){
            input.value = '';
            alert("Inavild input");
        }else{
            input.value = maxZecimal(evaluation);
        }
    }
    catch(err){
        alert("Invalid input");
    }
}

cl = () =>{
    input.value='';
}

del = () =>{
    input.value=input.value.slice(0,-1);
}

//Max 10 zecimals
maxZecimal = (number) =>{
    if(String(number).split(".")[1]?.length > 2){
        return number.toFixed(10);
    }else{
        return number;
    }
}
  

