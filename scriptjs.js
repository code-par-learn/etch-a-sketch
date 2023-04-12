


let colornow="black";



function resize(size){
const container=document.querySelector('.container');
container.style.gridTemplateColumns=`repeat(${size},1fr)`;
container.style.gridTemplateRows=`repeat(${size},1fr)`;
let sqrs=container.querySelectorAll('div');
sqrs.forEach(div=>div.remove());
let total=size*size;
    for(let i=0;i<total;i++){
        const sqr=document.createElement('div');
    sqr.classList.add('griditem');
    sqr.addEventListener('mouseover',changesqr);
    
    if(size>18){
        sqr.style.borderRadius="5px";
    }
    else{
        sqr.style.borderRadius="10px";
    }
    sqr.style.background="white";   
    sqr.style.margin="1px";     
    container.insertAdjacentElement('beforeend',sqr);

    }
}
resize(9);
function change(size){
    
       resize(size);
      }

function black(){
    colornow="black";
}
function colors(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
}
function changesqr(){
    
        if(colornow=="black"){
            this.style.backgroundColor="black";
        }
    
    else{
        this.style.backgroundColor=colors();
    }
    
    }
function changecolor(){
    colornow="rainbow";
    }
function clearblock(){
    const container=document.querySelector('.container');
    let blocks=container.querySelectorAll('div');
    blocks.forEach((block)=>{
        
        block.style.background="white";
    })
}
function circles(){
    const container=document.querySelector('.container');
    let blocks=container.querySelectorAll('div');
    blocks.forEach((block)=>{
        //block.style.border="1px solid gray";
        block.style.borderRadius="50%";
        block.style.background="white";
    })

}
function square(){
    const container=document.querySelector('.container');
    let blocks=container.querySelectorAll('div');
    blocks.forEach((block)=>{
        block.style.borderRadius="10px";
        block.style.background="white";
        block.style.border="box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),0.3em 0.3em 1em rgba(0, 0, 0, 0.3)";
        block.style.margin="1px";
    })

}





