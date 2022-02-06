var box = document.querySelector('.red-box');

box.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    box.innerHTML = 'X Coordinate= ' + x + ' ,' + 'Y Coordinate= '+ y;
})