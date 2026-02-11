function setup(){

    createCanvas(300,300)

}

let cols = 3
let rows = 3
let box1, box2

function draw(){

    for(let i = 0; i < cols; i++){

        line(i * 100, 0, i * 100, height)
        line(0, i * 100, width, i * 100)
        box1 = i * 50
        box2 = i * 50
        if(isMouseOver(box1, box2)){

            fill(200)
        }
    }
}

function drawLetter(){

}

function isMouseOver(boxX, boxY){

    if(mouseX > boxX - 50 && mouseX < boxX + 50 
    && mouseY > boxY - 50 && mouseY < boxY + 50){

        return true
    }
}