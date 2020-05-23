var a = document.getElementById('test');

function changeColor(){
    if(a.style.backgroundColor === 'black'){
        a.style.backgroundColor = 'yellow';
    } else{
        a.style.backgroundColor = 'black';
    }
};

var clear = document.getElementById('butn');

function clearPage(){
        clear.classList.toggle("clear")

    
        document.getElementById("flex").classList.toggle("show");
    
}