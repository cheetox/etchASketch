window.onload=function(){
    const grid=document.querySelector('.sketch');
    

    for (let i = 0; i < 16*16; i++) {
        const dot=document.createElement('div');
        dot.classList.add('grid');
        dot.addEventListener("mousedown",(e) =>{e.currentTarget.style.background='black'})
        dot.addEventListener('mouseover',(e)=>{
            if(e.buttons == 1 || e.buttons == 3){
                //do some stuff
                e.currentTarget.style.background='black'
            }
            
        })
        grid.appendChild(dot);
    }
}



