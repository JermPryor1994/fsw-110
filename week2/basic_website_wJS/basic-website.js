var newDiv = document.createElement('div');
newDiv.className = 'topnav';
var a1 = document.createElement('a');
var link1 = document.createTextNode('Home');
a1.appendChild(link1);
a1.title = "Home";
a1.href = "www.home.com"
newDiv.appendChild(a1);
var a2 = document.createElement('a');
var link2 = document.createTextNode('My Life');
a2.appendChild(link2);
a2.title = "My Life";
a2.href = "www.mylife.com"
newDiv.appendChild(a2);
var a3 = document.createElement('a');
var link3 = document.createTextNode('Pets');
a3.appendChild(link3);
a3.title = "Pets";
a3.href = "www.pets.com"
newDiv.appendChild(a3);
document.body.appendChild(newDiv);

var newH1 = document.createElement('h1');
newH1.textContent = 'Welcome to my life!';
document.body.appendChild(newH1);

var newP = document.createElement('p');
newP.textContent = 'My name is Jeremy Pryor. I have a wife and three beautiful children. Aside from schooling, I have a full-time just at a glue-lam plant. My life can get very busy.';
document.body.appendChild(newP);

var newH3 = document.createElement('h3');
newH3.textContent = 'My Pets';
document.body.appendChild(newH3)

var listItems = ['Cat: Tee-Tee', 'Cat: Jo-Jo', 'Snake: Jupiter'];
var list = document.createElement('ul');
listItems.forEach(function (text){
    var li = document.createElement('li');
    li.textContent = text;
    list.appendChild(li);
});
document.body.appendChild(list);

var footer = document.createElement('footer');
footer.textContent = 'It has been a pleasure adding school to this crazy thing called life.';
document.body.appendChild(footer);