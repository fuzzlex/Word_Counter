
let newTextEl = document.getElementById("newText");
let imgEl = document.getElementsByClassName("container");

function textCounter(){
    let count = 0;
    const setLetter = new Set();
    let form = document.forms["sentence"];
    let textAr = form["textA"].value;
    let str1 = textAr.toLowerCase().split(" ")
    for(i of str1){
        count = 0;
        if (i == " ") continue;
        for(j of str1){
            if(i === j) count++;    
    }setLetter.add(`${i}:${count}`) 
    }
    newTextEl.textContent = Array.from(setLetter);
    document.getElementById("container").style.backgroundImage = "url('image2.jpg')";
    document.getElementById("formEl").style.display = "none";
}

