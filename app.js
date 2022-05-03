let output = document.getElementById('calc-screen');

function display( num){
  
  output.value+=num;
}

function Calculate(){

    if(output.value.length==0){
        return "";
    }
    try{
        output.value = eval(output.value);
    }
    catch(err){
        alert("Invalid opeartion");
    }
}

function Clear(){
  
    output.value= "";
}
function del (){
   
    output.value = output.value.slice(0,-1)
}