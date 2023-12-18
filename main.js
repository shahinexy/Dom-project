// Login section
const pass = document.querySelector('.password');
const showHid = document.querySelector('.show_hide');
showHid.addEventListener('click', ()=>{
    const type = pass.getAttribute('type') === 'password' ? 'text' : 'password'
    pass.setAttribute('type', type);
    if(showHid.innerText === 'Show'){
         showHid.innerText = 'Hide';
    } else{
        showHid.innerText = 'Show';
    }
})