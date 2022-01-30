const button = document.getElementById('button');



button.addEventListener('click', function(){
    var firstName = document.querySelector('input[id=firstname]').value;
    var lastName = document.querySelector('input[id=lastname]').value;
    var age = document.querySelector('input[id=age]').value;
    var genderSel = document.querySelectorAll('input[name="choice"]:checked');
    var gender = [];
    for (var i=0; i<genderSel.length; i++){
        gender.push(' ' + genderSel[i].value)
    }
    var select = document.getElementById('selection');
    var value = select.options[select.selectedIndex].value;
    var shopping = document.querySelectorAll('input[name="YN"]:checked');
    var shopped = [];
    for (var i=0; i<shopping.length; i++){
        shopped.push(' ' + shopping[i].value)
    }
    var checked = [];
    var checkbox = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var i=0; i<checkbox.length; i++) {
        checked.push(' ' + checkbox[i].value);
    }
    alert('First Name: ' + firstName + '\n' +'Last Name: ' + lastName +
     '\n' +'Age: ' + age + '\n' +'Gender: ' + gender + '\n' + 'Recomend? ' + value + '\n' +
     'Shopped with us? ' + shopped + '\n' + 'Diet Restrictions:' + checked);
    
})    