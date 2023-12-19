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

const submit = document.querySelector('#submit_login');
const access = document.querySelector('.access');
submit.addEventListener('click', (e)=>{
    access.innerText = 'Now you have access of this page';
    access.style.textAlign = 'center';
    access.style.color = 'green';
    access.style.backgroundColor = '#b3d9c9';
    access.style.margin = '20px 0px';
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


// == Search section ==
// delete button
const ul = document.querySelector('.search_area ul');
ul.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        const li = e.target.parentElement;
        li.parentElement.removeChild(li);
    }
    newLi()
})

// - adding list - 
const addList = document.forms['add_list'];
addList.addEventListener('submit', (e)=>{
    e.preventDefault();
    const value = e.target.querySelector('input[type ="text"]').value;

    // create element 
    const newLi = document.createElement('li');
    const newP = document.createElement('p');
    const newBtn = document.createElement('button');

    // add content 
    newP.innerText = value;
    newBtn.innerText = 'delete';

    // add class
    newLi.classList.add('flex', 'gap-5', 'my-2')
    newP.classList.add('w-5/6', 'text-xl', 'border-b-2','border-purple-400')
    newBtn.classList.add('delete', 'w-1/6','text-xl', 'p-1', 'rounded', 'bg-purple-600')

    // append child
    newLi.appendChild(newP);
    newLi.appendChild(newBtn);
    ul.appendChild(newLi);

})


// checkbox for hide list
const hide = document.getElementById('hide');
hide.addEventListener('change', ()=>{
    if(hide.checked){
        ul.style.display = 'none';
    } else{
        ul.style.display = 'initial';
    }
})

// ============= Completed item list ==================
const completedUl = document.querySelector('.completed_list ul');
function newLi(){
    completedUl.innerText = 'Completed delete'
}
