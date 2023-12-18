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

// tab section 
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', (e)=>{
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach((panel) => {
            if(panel == targetPanel){
                panel.classList.add('active');
            } else{
                panel.classList.remove('active');
            }
        });
    }
})

