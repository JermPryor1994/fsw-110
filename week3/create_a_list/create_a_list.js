var newH1 = document.createElement('h1');
newH1.textContent = 'Hello World';
document.body.appendChild(newH1);

for (var i = 0; i <= 9; i++){
    var addH1 = document.createElement('h1');
    addH1.textContent = 'Hello World'
    document.body.appendChild(addH1);
    addH1.style.color = 'green'
    addH1.style.textDecoration = 'underline';
}

const names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily'];

for (var i = 0; i < names.length; i++){
    var displayName = document.createElement('h2');
    displayName.textContent = names[i];
    document.body.appendChild(displayName);
}