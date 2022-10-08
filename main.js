let number1=0;
let number2=0;
sum=()=>{
    calculate("+");
}

function calculate(exp) {
    let tempValue=document.
    getElementById('textInput').value;
    if (number1===0){
        if (tempValue!==''){
           number1=tempValue;
        }else{
            alert('please insert a number');
            return;
        }

    }
    console.log(exp, number1);
}