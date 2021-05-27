var random1 = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;

function getOrder(srcs, idx){
    src = "dice" + idx +".png";
    return src;
}

for(var i = 0; i < 2; i++){
    var srcs = "";
    document.querySelectorAll('img')[i].setAttribute('src','./images/dice6.png');
    document.querySelectorAll('img')[i].addEventListener('mouseover', function (){
        for(var j = 0; j < 2; j++){
            if(j == 0){
                srcs = getOrder("src", random1);
            } else {
                srcs = getOrder("src2", random2);
            }
            document.querySelectorAll('img')[j].setAttribute('src','./images/'+srcs);

            if(random1 > random2){
                document.querySelector('h1').textContent = "🎉Player 1 Wins!";
            } else if(random1 < random2){
                document.querySelector('h1').textContent = "Player 2 Wins!🎉";
            } else {
                document.querySelector('h1').textContent = "Draw!";
            }
        }
    });

    document.querySelectorAll('img')[i].addEventListener('mouseout', function (){
        for(var j = 0; j < 2; j++){
            document.querySelectorAll('img')[j].setAttribute('src','./images/'+srcs);
        }
        random1 = 0, random2 = 0;
        location.reload();
    });
}