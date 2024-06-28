const listeDeroul = document.querySelector('.navlist')
const iconlist = document.querySelector('.iconlist')
const iconlistDeroul =' <i class="fi fi-br-menu-burger"></i>'
const cross= '<i class="fi fi-br-cross"></i>'
const list= document.querySelector('.navlist')

function changeIconList(){
    if(iconlist.classList.contains('close')){
        iconlist.innerHTML=iconlistDeroul
    }else{
        iconlist.innerHTML=cross
    }
}

window.addEventListener("load", ()=>{
    changeIconList()
});

iconlist.addEventListener('click',()=>{
    iconlist.classList.toggle('close')
    list.classList.toggle('closelist')
    changeIconList()
})
console.log(listeDeroul)