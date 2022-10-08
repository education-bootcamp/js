let number1=0;
let number2=0;
sum=()=>calculate("+");
mul=()=>calculate("*");
div=()=>calculate("/");
sub=()=>calculate("-");
mod=()=>calculate("%");

function calculate(exp) {
    let tempValue=Number(document.
    getElementById('textInput').value);
    if (isNaN(tempValue) || tempValue===0){
        alert('Please enter a valid number');
        return;
    }
    if (number1===0){
           number1=tempValue;
           document.getElementById('textInput').value='';
           return;
    }else{
        number2=tempValue;
        document.getElementById('textInput').value='';
    }

    switch (exp) {
        case '+':
            document.getElementById('textInput').value=`${number1} ${exp} ${number2} = ${number1+number2}`;
            break;
        case '-':
            document.getElementById('textInput').value=`${number1} ${exp} ${number2} = ${number1-number2}`;
            break;
        case '*':
            document.getElementById('textInput').value=`${number1} ${exp} ${number2} = ${number1*number2}`;
            break;
        case '/':
            document.getElementById('textInput').value=`${number1} ${exp} ${number2} = ${number1/number2}`;
            break;
        case '%':
            document.getElementById('textInput').value=`${number1} ${exp} ${number2} = ${number1%number2}`;
    }

}

refresh=()=>{
    number1=0;
    number1=0;
    document.getElementById('textInput').value='';
}