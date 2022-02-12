
var button = document.getElementById('button');


button.addEventListener('click', function(){
    document.getElementById('form').addEventListener('submit', function(e){
        e.preventDefault();
    })
    const main = document.getElementById('articles');
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var newArticle = document.createElement('article');
    newArticle.id = 'newarticle';
    var fullName = document.createElement('h4');
    fullName.innerHTML = name + ' said: ';
    fullName.className = 'fullName';
    newArticle.appendChild(fullName);
    var theMess = document.createElement('p');
    theMess.innerHTML = message;
    theMess.className = 'themess';
    newArticle.appendChild(theMess);
    var del = document.createElement('button');
    del.innerHTML = 'Remove';
    del.id = 'close';
    newArticle.appendChild(del);
    main.appendChild(newArticle);
    const inputs = document.querySelectorAll('#name, #message');
    inputs.forEach(input =>{
        input.value = '';
    })
    
})
document.getElementById('close').onclick = function(){
    this.remove(this.parentElement);
}
