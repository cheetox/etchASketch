window.onload=function(){
    const grid=document.querySelector('.sketch');
    const clean=document.querySelector('#clear');
    clean.addEventListener('click',()=>clear())
    

    for (let i = 0; i < 16*16; i++) {
        const dot=document.createElement('div');
        dot.classList.add('grid');
        dot.addEventListener('dragstart', (e) => {
            e.preventDefault()
          })
          
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
function clear(){
    const canvas=document.querySelectorAll('.grid');
    canvas.forEach((gr)=>{
        gr.style.background='white';
    })
}


