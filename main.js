


const toggleDarkMode = document.querySelector('.toggleDarkMode');
const body = document.querySelector('body');

load();

toggleDarkMode.addEventListener('click', e =>{
    body.classList.toggle('roomDarkMode');
    store(body.classList.contains('roomDarkMode'));
});

function load(){
    const roomDarkMode = localStorage.getItem('roomDarkMode');

    if(!roomDarkMode){
        store('false');
    }
    else if(roomDarkMode == 'true'){
            body.classList.add('roomDarkMode');
        }
    }

function store(valor){
    localStorage.setItem('roomDarkMode', valor);

}
