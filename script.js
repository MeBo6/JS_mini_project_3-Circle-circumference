let input = document.getElementById('myText');
let button = document.getElementsByTagName('button')[0];
input.addEventListener('input', function(e) {
   document.getElementById('myP').innerHTML = e.target.value;
});
button.addEventListener('click', function() {
   input.value = '';
   document.getElementById('myP').innerHTML='';
});