document.querySelector('div').addEventListener('click', function(event){
    event.stopPropagation();
    alert('¡Hola! Soy el div');
});