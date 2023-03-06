const logomenu = document.querySelector('.logomenu');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(logomenu)

logomenu.addEventListener('click', () => {
    menu.classList.toggle("spread")
})

window.addEventListener('click', e => {
    if (menu.classList.contains('spread') && e.target != menu && e.target != logomenu) {
        menu.classList.toggle("spread")
    }
})