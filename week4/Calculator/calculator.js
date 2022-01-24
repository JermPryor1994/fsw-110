document.body.style.backgroundColor = 'lightgrey';

var h1 = document.createElement('h1');
h1.innerHTML = 'My Basic Calculator';
h1.style.textAlign = 'center';
h1.style.textDecoration = 'underline';
document.body.appendChild(h1);

var addition = document.createElement('div');
addition.style.border = '2px solid black';
addition.style.marginLeft = '20%';
addition.style.marginRight = '20%';
addition.style.padding = '5px';
addition.style.textAlign = 'center';
addition.style.backgroundColor = 'lightblue';

var input1 = document.createElement('input');
input1.style.border = '1px solid black';
input1.className = 'num1';
addition.appendChild(input1);

var input2 = document.createElement('input');
input2.style.border = '1px solid black';
input2.style.marginLeft = '2px';
input2.className = 'num2';
addition.appendChild(input2);

var addButton = document.createElement('button');
addButton.style.border = '1px solid black';
addButton.style.marginLeft = '5px'
addButton.innerHTML = '+';
addButton.onclick = function(a, b){
    var a = document.querySelector('.num1').value;
    var b = document.querySelector('.num2').value;
    var sum = parseInt(a) + parseInt(b);
    output1.innerHTML = sum;
}
addition.appendChild(addButton);

var output1 = document.createElement('p');
output1.style.border = '1px solid black';
output1.style.padding = '10px';
output1.style.marginLeft = '100px';
output1.style.marginRight = '100px';
output1.style.backgroundColor = 'white';
addition.appendChild(output1);

document.body.appendChild(addition);

var subtraction = document.createElement('div');
subtraction.style.border = '2px solid black';
subtraction.style.marginLeft = '20%';
subtraction.style.marginRight = '20%';
subtraction.style.marginTop = '10px';
subtraction.style.padding = '5px';
subtraction.style.textAlign = 'center';
subtraction.style.backgroundColor = 'red';

var input3 = document.createElement('input');
input3.style.border = '1px solid black';
input3.className = 'num3';
subtraction.appendChild(input3);

var input4 = document.createElement('input');
input4.style.border = '1px solid black';
input4.style.marginLeft = '2px';
input4.className = 'num4';
subtraction.appendChild(input4);

var subButton = document.createElement('button');
subButton.style.border = '1px solid black';
subButton.style.marginLeft = '5px'
subButton.innerHTML = '-';
subButton.onclick = function(a, b){
    var a = document.querySelector('.num3').value;
    var b = document.querySelector('.num4').value;
    var sub = parseInt(a) - parseInt(b);
    output2.innerHTML = sub;
}
subtraction.appendChild(subButton);

var output2 = document.createElement('p');
output2.style.border = '1px solid black';
output2.style.padding = '10px';
output2.style.marginLeft = '100px';
output2.style.marginRight = '100px';
output2.style.backgroundColor = 'white';
subtraction.appendChild(output2);

document.body.appendChild(subtraction);

var multiply = document.createElement('div');
multiply.style.border = '2px solid black';
multiply.style.marginLeft = '20%';
multiply.style.marginRight = '20%';
multiply.style.marginTop = '10px';
multiply.style.padding = '5px';
multiply.style.textAlign = 'center';
multiply.style.backgroundColor = 'green';

var input5 = document.createElement('input');
input5.style.border = '1px solid black';
input5.className = 'num5';
multiply.appendChild(input5);

var input6 = document.createElement('input');
input6.style.border = '1px solid black';
input6.style.marginLeft = '2px';
input6.className = 'num6';
multiply.appendChild(input6);

var mulButton = document.createElement('button');
mulButton.style.border = '1px solid black';
mulButton.style.marginLeft = '5px'
mulButton.innerHTML = '*';
mulButton.onclick = function(a, b){
    var a = document.querySelector('.num5').value;
    var b = document.querySelector('.num6').value;
    var mul = parseInt(a) * parseInt(b);
    output3.innerHTML = mul;
}
multiply.appendChild(mulButton);

var output3 = document.createElement('p');
output3.style.border = '1px solid black';
output3.style.padding = '10px';
output3.style.marginLeft = '100px';
output3.style.marginRight = '100px';
output3.style.backgroundColor = 'white';
multiply.appendChild(output3);

document.body.appendChild(multiply);

var divide = document.createElement('div');
divide.style.border = '2px solid black';
divide.style.marginLeft = '20%';
divide.style.marginRight = '20%';
divide.style.marginTop = '10px';
divide.style.padding = '5px';
divide.style.textAlign = 'center';
divide.style.backgroundColor = 'yellow';

var input7 = document.createElement('input');
input7.style.border = '1px solid black';
input7.className = 'num7';
divide.appendChild(input7);

var input8 = document.createElement('input');
input8.style.border = '1px solid black';
input8.style.marginLeft = '2px';
input8.className = 'num8';
divide.appendChild(input8);

var divButton = document.createElement('button');
divButton.style.border = '1px solid black';
divButton.style.marginLeft = '5px'
divButton.innerHTML = '/';
divButton.onclick = function(a, b){
    var a = document.querySelector('.num7').value;
    var b = document.querySelector('.num8').value;
    var div = parseInt(a) / parseInt(b);
    output4.innerHTML = div;
}
divide.appendChild(divButton);

var output4 = document.createElement('p');
output4.style.border = '1px solid black';
output4.style.padding = '10px';
output4.style.marginLeft = '100px';
output4.style.marginRight = '100px';
output4.style.backgroundColor = 'white';
divide.appendChild(output4);

document.body.appendChild(divide);