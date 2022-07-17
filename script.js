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
        const text=document.querySelector('input');
        const changeButton=document.querySelector('.change');
        changeButton.addEventListener('click',()=>{
            changeGridSize(text.value)
        })

    }
}
function clear(){
    const canvas=document.querySelectorAll('.grid');
    canvas.forEach((gr)=>{
        gr.style.background='white';
    })
    
}
function changeGridSize(newSize){
    const gridWidth=(550/newSize)-4;
    const lol=document.querySelector('.grid');
    const grid=document.querySelector('.sketch');
    const oldGrids=document.querySelectorAll('.grid');
    
    grid.innerHTML='';


    for (let i = 0; i < newSize*newSize; i++) {
        const dot=document.createElement('div');
        dot.classList.add('grid');
        dot.style.width=`${gridWidth}px`;
        dot.style.height=`${gridWidth}px`;
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

    console.log(lol.style.width);

}


