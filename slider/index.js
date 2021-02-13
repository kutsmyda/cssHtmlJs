const navItem = [...document.getElementsByClassName('nav-item')];
const navSlider = [...document.getElementsByClassName('slider-item')];

console.log(navItem)
console.log(navSlider)



navItem.forEach((item,index)=>{
    item.dataset.index = index
    console.log(item)
    if(index === 0){
        item.classList.add('nav-item-active')
    }

})


navSlider.forEach((item,index)=>{
    item.dataset.index = index
    console.log(item)
    if(index === 0){
        item.classList.add('slider-item-active')
    }


})
toggleActivate = (index)=>{
    for (let i = 0; i < navSlider.length; i++) {
        if(i===Number(index)){
             navSlider[i].classList.add('slider-item-active')
            navItem[i].classList.add('nav-item-active')
        }else {
            navSlider[i].classList.remove('slider-item-active')
            navItem[i].classList.remove('nav-item-active')
        }

    }
}

const elementById = document.getElementById('nav');
elementById.onmouseover=(ev )=>{
    if(ev.target.classList.contains('nav-item')){
        toggleActivate(ev.target.dataset.index)
    }
    console.log(ev.target.classList.contains('nav-item'))
    console.log(ev.target.dataset.index)
}
