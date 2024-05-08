const mybuttons=document.querySelectorAll("button");
for(butt of mybuttons){
    butt.addEventListener('click',colorize);
}

function setcolor(){
    const r= Math.floor(Math.random()*256);
    const g= Math.floor(Math.random()*256);
    const b= Math.floor(Math.random()*256);
    const mycolor=`rgb(${r},${g},${b})`;
    return mycolor;
}

function colorize(){
    this.style.backgroundColor=setcolor();
}

