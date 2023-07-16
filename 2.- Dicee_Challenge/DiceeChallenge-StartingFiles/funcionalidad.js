numero1 = Math.floor(Math.random()*6)+1
numero2 = Math.floor(Math.random()*6)+1

valorImagen1 = "./images/dice"+numero1+".png"
valorImage2 = "./images/dice"+numero2+".png"

function dados(){
    if(numero1 > numero2){
        document.querySelector("h1").innerHTML = "* Player 1 Wins"
    }else if(numero2 > numero1){
        document.querySelector("h1").innerHTML = "Player 2 Wins *"
    }else{
        document.querySelector("h1").innerHTML = "* Draw *"
    }
    document.querySelector(".img1").setAttribute("src",valorImagen1)
    document.querySelector(".img2").setAttribute("src",valorImage2)
}

/* in the body put <body onload="dados()"*/