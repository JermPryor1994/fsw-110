var newH1 = document.createElement('h1');
newH1.textContent = 'Welcome to my JS site!';
document.body.appendChild(newH1);

var newP = document.createElement('p');
newP.textContent = 'All of this was created with Javascript';
document.body.appendChild(newP);

var listItems = ['Learning', 'Is', 'Fun'];
var list = document.createElement('ol');
listItems.forEach(function (text){
    var li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
});
document.body.appendChild(list);