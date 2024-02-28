function startgame(){
    gameLoop();
}

var count = 0;


var score = 0;


function upscore(){
    score++;
}


var personvisib = false; // переменная переключателя


function gameLoop(){
    personvisib = !personvisib // переключение видимости


    //улосвие проверки на переключение
    if (personvisib == true){
        var classtoset = "chr visible"
    }
    else{
        var classtoset = "chr hidden"
    }
    
    

    // загрузка области где распологаются блоки
    var gamezone = document.getElementById("gamezone");


    //перебор всех блоков
    for( i = 0 ; i<8; i++){
        gamezone.children[i].className = classtoset;
        gamezone.children[i].innerHTML = "Челик"
        // при нажатии на челика отнимается 2 балла
        gamezone.children[i].onclick = function(){score-=2}
        gamezone.children[i].onclick = function(){classtoset.style.display = "none"}
        
    }
function upscor(){
        var shet = document.getElementById("score");
        shet.innerHTML = score
                

    }    
    // выбор рандомного числа
    var randomnum = Math.floor(Math.random()*8) +1;
    

    // pin лишнего к рандомному блоку
    gamezone.children[randomnum-1].innerHTML = "ЭЭЭ"

    // при нажатии на лишнего добавляется 1 балл

    gamezone.children[randomnum-1].onclick = function(){score+=1}
    

    // apply внешки к лишнему
    gamezone.children[randomnum-1].className = classtoset + " pudge";
    // у randomnum делаем -1, потому что в JS отсчет начинается с нуля
    
    

    count++;
    if (count < 15){
        setTimeout(gameLoop, 1500);
    }
    else{
        alert("Game Over! Your Score: " +score);
    }    
}