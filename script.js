const botonAgregar = document.getElementById('btn-cart');
const modalNotificacion = document.getElementById('modal'); 

botonAgregar.addEventListener('click', function () {
    modalNotificacion.style.display = 'flex';
    setTimeout(function() {
        modalNotificacion.style.display = 'none';
    }, 3000);
})