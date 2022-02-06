/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

document.addEventListener('keydown', function(event){
    var keyCode = event.keyCode;
    var key = event.key;
    document.getElementById('output').innerHTML = 'Key: ' + key + ' ' + 'Code: ' + keyCode;
})