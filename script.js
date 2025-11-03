const botonAgregar = document.getElementById('btn-cart');
const modalNotificacion = document.getElementById('modal'); 

function mostrarModal(duracionSegundos = 3){
    modalNotificacion.classList.add('modal-ver');
    const duracionMilisegundos = duracionSegundos * 1000;
    setTimeout(() => {
        modalNotificacion.classList.remove('modal-ver')
    }, 3000);
}

botonAgregar.addEventListener('click', () => {
    mostrarModal(3)
})