// floating balloons

for(let i=0;i<10;i++){

let balloon=document.createElement("div")

balloon.classList.add("balloon")

balloon.style.left=Math.random()*100+"%"

balloon.style.background=
"rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")"

balloon.style.animationDuration=(6+Math.random()*5)+"s"

document.body.appendChild(balloon)

}


// heart animation

function createHeart(x,y){

let heart=document.createElement("div")

heart.classList.add("heart")

heart.innerHTML="❤️"

heart.style.left=x+"px"
heart.style.top=y+"px"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),3000)

}


// tap event

function openSurprise(){

for(let i=0;i<15;i++){

createHeart(
window.innerWidth/2 + Math.random()*100-50,
window.innerHeight/2
)

}

setTimeout(()=>{

window.location.href="surprise.html"

},1500)

}
