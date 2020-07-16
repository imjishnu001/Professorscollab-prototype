arr = ['','','','','','','','',''];
xWin = 0;
oWin = 0;
tracker = 0;
conditions = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];
condition = []
document.getElementById('win').innerHTML ="X : 0 /// O : 0";
turn  = 'x'
function checkTurn(pos,id){
    if(turn === 'x'){
        arr[pos] = 'x';
        document.getElementById(id).innerHTML='x';
        document.getElementById(id).disabled=true;
        turn= 'o';
        tracker++;
    }else{
        arr[pos] = 'o';
        document.getElementById(id).innerHTML='o';
        document.getElementById(id).disabled=true;
        turn= 'x'; 
        tracker++; 
    }    
    winCheck();
}

function winCheck(){
    for(i =0 ; i <=7; i++){
        document.getElementById('win').innerHTML ="X : 0 /// O : 0";
        condition = conditions[i];
        bx1 = arr[condition[0]];
        bx2 = arr[condition[1]];
        bx3 = arr[condition[2]];
        console.log(condition)
        if(bx1 == '' || bx2 == '' || bx3 == ''){
            continue;
        }
        if(bx1 === bx2 && bx2 === bx3){
            winCount(bx1)
            break;
        }
    }
    
}

function winCount(win){
    if(win === 'x'){
        xWin++;
        restart()
        alert(win+" Wins");
    }else if(win === 'o'){
        oWin++;
        restart();
        alert(win+" Wins");
    }
    
}

function restart(){
    arr = ['','','','','','','','',''];
    turn = 'x';
    var buttons = document.getElementsByClassName("bt");
    Array.from(buttons).forEach(button =>{
        button.disabled=false;
    });
    Array.from(buttons).forEach(button =>{
        button.innerHTML='';
    });
    document.getElementById('win').innerHTML ="X : "+ xWin+" /// O : "+ oWin;
}