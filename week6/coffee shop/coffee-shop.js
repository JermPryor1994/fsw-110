document.getElementById('order').addEventListener('submit', function(e){
    e.preventDefault();
})

let appPrice = 1.5;
let masPrice = 2;
let perPrice = 1.8;
let nailsPrice = 2.5;

var total = document.getElementById('button').addEventListener('click', function(){
    var appQnt = document.getElementById('app').value;
    var appTotal = appPrice * appQnt;
    var masQnt = document.getElementById('mas').value;
    var masTotal = masPrice * masQnt;
    var perQnt = document.getElementById('per').value;
    var perTotal = perPrice * perQnt;
    var nailsQnt = document.getElementById('nails').value;
    var nailsTotal = nailsPrice * nailsQnt;
    var allTotal = appTotal + masTotal + perTotal + nailsTotal;
    var totalPrice = document.getElementById('total');
    totalPrice.innerHTML = '$' + allTotal;
    var orderItems = document.getElementById('orderitems');
    if(appQnt>0){
        var appItems = document.createElement('li');
        appItems.innerHTML = appQnt + ' - ' + 'Apprentice';
        orderItems.appendChild(appItems);
    }
    if(masQnt>0){
        var masItems = document.createElement('li');
        masItems.innerHTML = masQnt + ' - ' + 'Master';
        orderItems.appendChild(masItems);
    }
    if(perQnt>0){
        var perItems = document.createElement('li');
        perItems.innerHTML = perQnt + ' - ' + 'Perfection';
        orderItems.appendChild(perItems);
    }
    if(nailsQnt>0){
        var nailsItems = document.createElement('li');
        nailsItems.innerHTML = nailsQnt + ' - ' + 'T.A.N.';
        orderItems.appendChild(nailsItems);
    }
    
})

