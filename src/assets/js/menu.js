const id_btn_menu = document.getElementById('button-menu');
const btn_content = document.getElementById('button-container');

id_btn_menu.addEventListener('click', () => {
    if (btn_content.classList.contains('d-block')) {
        btn_content.classList.remove('d-block');
        btn_content.classList.add('d-none');
    } else {
        btn_content.classList.remove('d-none');
        btn_content.classList.add('d-block');
    }
});

// Función para actualizar clases según el tamaño de la pantalla
function updateClasses() {
    if (window.innerWidth >= 768) {
        // Dispositivos medianos y grandes (tabletas y escritorio)
        id_btn_menu.classList.add('d-none');
        btn_content.classList.remove('d-none');
    } else {
        // Dispositivos pequeños (móviles)
        id_btn_menu.classList.remove('d-none');
        btn_content.classList.add('d-none');
    }
}

window.addEventListener('load', updateClasses);
window.addEventListener('resize', updateClasses);

updateClasses();