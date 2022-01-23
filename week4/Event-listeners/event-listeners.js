var square = document.createElement('div');
square.id = 'square';
square.style.width = '200px';
square.style.height = '200px';
square.style.backgroundColor = 'white';
square.style.border = '2px solid black';
document.body.appendChild(square);

document.addEventListener('DOMContentLoaded', function (){
    square.style.backgroundColor = 'black';
});
square.addEventListener('mouseover', function(){
    square.style.backgroundColor = 'green';
});
square.addEventListener('mousedown', function(){
    square.style.backgroundColor = 'yellow';
});
square.addEventListener('mouseup', function(){
    square.style.backgroundColor = 'blue';
});
square.addEventListener('dblclick', function(){
    square.style.backgroundColor = 'red';
});
document.addEventListener('scroll', function(){
    square.style.backgroundColor = 'purple';
})

for (i=0; i <= 10; i++){
    var h1 = document.createElement('h1');
    h1.innerHTML = 'Hello World';
    document.body.appendChild(h1);
}

document.addEventListener('keypress', function keyPress(event){
    var key = event.key;
    if (key === 'r'){
        square.style.backgroundColor = 'red';
    }
    else if (key === 'b'){
        square.style.backgroundColor = 'blue';
    }
    else if (key === 'g'){
        square.style.backgroundColor = 'green';
    }
    else if (key === 'p'){
        square.style.backgroundColor = 'purple';
    }
    else if (key === 'y'){
        square.style.backgroundColor = 'yellow';
    }
})
