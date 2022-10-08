let number1=0;
let number2=0;
sum=()=>{
    calculate("+");
}

function calculate(exp) {
    let tempValue=document.
    getElementById('textInput').value;
    if (isNaN(tempValue) || tempValue===''){
        alert('Please enter a valid number');
        return;
    }
    if (number1===0){
           number1=tempValue;
    }
    console.log(exp, number1);
}