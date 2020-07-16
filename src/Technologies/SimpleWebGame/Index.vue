<template>
  <div class="dashboard">
    {{visitor()}}
      <div id="gameBoard">
           <v-container>
             <h1 class="grey--text text-center">A Simple Tic Tac Toe</h1><br/>
               <v-layout justify-center>
                      <v-card>
                        <v-list-item three-line>
                            <v-list-item-content >
                                <v-list-item-title>
                                    <v-btn @click="checkTurn(0)" id="0" class="gameButton primary ma-2 bt"></v-btn>
                                    <v-btn @click="checkTurn(1)" id="1" class="gameButton primary ma-2 bt"></v-btn>
                                    <v-btn @click="checkTurn(2)" id="2" class="gameButton primary ma-2 bt"></v-btn><br/>
                                    <v-btn @click="checkTurn(3)" id="3" class="gameButton primary ma-2 bt"></v-btn>
                                    <v-btn @click="checkTurn(4)" id="4" class="gameButton primary ma-2 bt"></v-btn>
                                    <v-btn @click="checkTurn(5)" id="5" class="gameButton primary ma-2 bt"></v-btn><br/>
                                    <v-btn @click="checkTurn(6)" id="6" class="gameButton primary ma-2 bt"></v-btn>
                                    <v-btn @click="checkTurn(7)" id="7" class="gameButton primary ma-2 bt"></v-btn>
                                    <v-btn @click="checkTurn(8)" id="8" class="gameButton primary ma-2 bt"></v-btn>
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-card-actions>
                        <h1 class="grey--text">X : {{xWin}}</h1>
                        <v-spacer></v-spacer>
                        <h1 class="grey--text">O : {{oWin}}</h1>
                        </v-card-actions>
                      </v-card>
                        
                </v-layout>
            </v-container> 
      </div>
    <v-btn large class="primary mt-15" fab fixed top right route to="/">
            <v-icon>mdi-home</v-icon>
        </v-btn><br/>
    <v-container class="my-5">
      <h1 class="grey--text">
        Introduction
      </h1>
      <p class="grey--text ma-5">
        This course aims to introduce the fundamentals of the client-side aspect of web development using Javascript by developing a simple tic tac toe game, We will have a follow-up course that will take you through the fundamentals of web UI designing.
      </p>
      <h1 class="grey--text">
        The Basic Layout
      </h1>
      <p class="grey--text ma-5">
        This course aims to introduce the fundamentals of the client-side aspect of web development using Javascript by developing a simple tic tac toe game, We will have a follow-up course that will take you through the fundamentals of web UI designing.
      </p>
        
        <p class="ma-5"></p>
        <div style="border:1px solid black; overflow:auto;background-color:#2e2e1f" class="white--text">
          <pre>
            {{code}}
          </pre>
        </div>
        <p class="grey--text ma-5">
          The above code has a simple table that contains, three rows, each row contains three buttons, which form the layout of our game board. Each button contains a unique id which represents the position of the button on the board, the id starts from 0 because we will use an array to store data in the game logic and array index starts from 0. each button also has a class bt which will be used later to group the buttons, buttons also have a onclick event which calls checkTurn function and passes a number as a function argument, the number just like id represents the position of the button in the game board which will be used to manipulate the button value and state. 
        </p>
        <h1 class="grey--text">
        Game Logic 
        </h1>
        <h3 class="grey--text ma-5">
            Note: place all the below mentioned code between &lt;script&gt; and &lt;/script&gt; tag for the web broswer to execute the Javascript code 
        </h3>
        <div style="border:1px solid black; overflow:auto;background-color:#2e2e1f;" class="white--text ma-5">
         <br/> <h2 class="text-center">  Declaring Variables </h2><br/>
          <pre>
            let gameBoard = ['','','','','','','','','']; //Array to keep track of x and o positions
            let xWin = 0; //Used to track the number of times X won
            let oWin = 0; //Used to track the number of times O won
            let tracker = 0; // Used to identify draw games
            let winConditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
            ]; //All possible winning conditions.
            let condition = []; // Used to store conditions in loop
            let turn  = 'x' // Used to keep track of player turn
          </pre>
        </div>
        <p class="grey--text ma-5">
          <ul>
            <li>
                gameBoard array helps us to store the x and o in position, gameBoard has 9 empty elements each representing a button from the game board UI. every time a button is pressed based on the button position and turn value will be stored in gameBoard array.<br/><br/>
                for example if player x clicks on the center button as their first move, which is 5th button on the board. gameBoard value will look like.<br/><br/>
                gameBoard = ['','','','','x','','','','']<br/><br/>
            </li>
            <li>
              xWin as the name suggests keeps count of how many times player X won.
            </li>
            <li>
              oWin as the name suggests keeps count of how many times player O won.
            </li>
            <li>
              tracker will be used to keep a track of total turn, based on which draw matches can be determined.
            </li>
            <li>
              winConditions is a 3d array which stores all the winning conditions, for any player to win each they should have three consecutive values, either diagonally , horizontally or vertically, each sub array hold three numbers which represents positions for example [0,1,2] represents first three buttons.
            </li>
            <li>
              condition is an empty array which is will be used inside a loop to store winConditions sub array individually. 
            </li>
            <li>
              turn will help us to determine which player will play next i.e x or o. 
            </li>
          </ul>
        </p>

        <div style="border:1px solid black; overflow:auto;background-color:#2e2e1f;" class="white--text ma-5">
          <br/><h2 class="text-center">  Function to determine turn </h2><br/>
          <pre>
            function checkTurn(position){ 
              if(turn === 'x'){  
                  gameBoard[position] = 'x';                        // Storing x in position 
                  document.getElementById(position).innerHTML='x';  // Displaying X in the box 
                  document.getElementById(position).disabled=true;  //Disabling the button 
                  turn= 'o';                                        //Changing Turn 
                  tracker++;                                        //Incrementing tracker to track draw
              }else{
                  gameBoard[position] = 'o';                        // Storing x in position
                  document.getElementById(position).innerHTML='o';  // Displaying O in the box 
                  document.getElementById(position).disabled=true;  //Disabling the button 
                  turn= 'x';                                        //Changing Turn
                  tracker++;                                        //Incrementing tracker to track draw
              }    
              winCheck();                                           //Function call to check game win
          }
          </pre>
        </div>
        <p class="grey--text ma-5"> When we click on any button in our game board, checkTurn is the first function that is triggered, which accepts a position as the argument for example if we press the first button on the board the position we get as argument is 0, now we check if turn is x or o, if turn is x, it will first store x at 0th index of the gameBoard array because we pressed first button, if we press 5th button on the board based on turn the corresponding value i.e x or will be stored in 4th index of gameBoard array, ideally which is 5th position as array index starts from 0. document.getElementById() is a Javascript inbuild function which can be used to manipulate html elements based on their id if you look back at out HTML code you will see each button has an id which is same as the position, using id we will update the value of the button that end-user clicked on, in this case the id and position are same values, so we can easily change the value of any button with the argument that we receive.<br/><br/> document.getElementById(position).innerHTML='x'<br/> .innerHTML is a property of getElementById which can be used to update the HTML value, in this case we are changing the value to x.<br/> we again have a document.getElementById which is being used to disable the button after updating the value. next, we simply assign o to turn, and incrementing the tracker variable.<br/> The same goes for the else block but that will update the values for O<br/> At last, we have a function call winCheck, which will hold the actual game logic.<br/> </p>
        <div style="border:1px solid black; overflow:auto;background-color:#2e2e1f;" class="white--text ma-5">
          <br/><h2 class="text-center">  Function to check game win </h2><br/>
          <pre>
            function winCheck(){
                    for(i =0 ; i  &lt;=7; i++){             //winConditions have 8 sub array, index starts from 0
                    let condition = winConditions[i];  //Declaring new array to store each sub array of winConditions.
                    box1 = gameBoard[condition[0]]; //storing value from winConditions sub array position 1
                    box2 = gameBoard[condition[1]]; //storing value from winConditions sub array position 2
                    box3 = gameBoard[condition[2]]; //storing value from winConditions sub array position 3
                    if(box1 == '' || box2 == '' || box3 == ''){
                        continue;                   //If any of the position is empty, the current iteration will be skipped 
                    }
                    if(box1 === box2 && box2 === box3){
                      return  winCount(box1)            //Function call for winCount if any winCondition is matched
                    }
                  }
                  if(tracker > 9){                    //If tracker reaches 10 that means the match is a Draw
                      alert("Draw")                     //Pop up stating match Draw
                      restart();                         //Function call to restart the game
                  }
              }
          </pre>
        </div>
        <p class="grey--text ma-5"> winCheck might look a bit complicated at first glance, but its quite simple once you understand how the 3d array works. Lets have a better understanding of winConditions before we start.<br/> <br/> [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]<br/> Now if you observe every sub array and compare it with the below display mentioned picture, you will have a better understanding of what these numbers represent.<br/> We are using these sub-arrays to hold index, for example, let's say 0,1,2 all this index in gameBoard array has x then player x wins because the player has 3 consecutive values horizontally, another example could be, if 0,4,8 all these index in gameBoard array have x then, x wins as player has 3 consecutive values diagonally. <br/> We are looping 7 times as the index starts from 0, 0-7 is total of 8, and and if check the winConditions we have 8 sub array or in other words 8 winning conditions. <v-responsive class="pt-4"> <v-img :aspect-ratio="16/8" src="/TicTacToe.png"></v-img> </v-responsive><br/><br/> Now that we have a better understanding of why we are using winConditions, let's understand how we will be implementing winConditions.<br/> Inside the loop we are defining a new variable named condition, this will be used to store sub array of winConditions, for example<br/><br/> in first iteration i = 0;<br/> winConditions[i] is [0,1,2]<br/> condition = winConditions[i] is [0,1,2] <br/> condition[0] is 0, condition[1] is 1 and condition[2] is 2.<br/><br/> now lets consider we are in middle of game, our gameBoard array might look something like this<br/><br/> ['x','','o','x','','o','x','','']<br/><br/> also consider we are in 4th iteration in our current loop so our condition value is [0,3,6]<br/><br/> box1 = gameBoard[condition[0]] // which stands for gameBoard[0], 0th index in above gameBoard array holds x, so the value of box1 will be x.<br/><br/> box2 = gameBoard[condition[1]] // which stands for gameBoard[3], 1st index in above gameBoard array holds x, so the value of box2 will be x.<br/><br/> box3 = gameBoard[condition[2]] // which stands for gameBoard[2], 2nd index in above gameBoard array holds x, so the value of box3 will be x.<br/><br/> In this case box1 == box2 && box2 == box3 is true as all boxes hold x, so winCount function will be triggered with x as argument. We are also checking if an of the position in sub-array index is empty in such case we skip to next iteration as we need all the boxes to have value to win.<br/><br/> If the tracker value is greater than 9 that indicates that all buttons have been pressed and no player won, which means that match is a draw, in that case we show the same in alert and call the restart function.</p>
         <div style="border:1px solid black; overflow:auto;background-color:#2e2e1f;" class="white--text ma-5">
          <br/><h2 class="text-center">  Function to keep track of win count </h2><br/>
          <pre>
            function winCount(player){   //Win count accepts winning character as parameter i.e X or O  
              if(player === 'x'){        //If parameter is x
                  xWin++;             //Incrementing X win count
                  alert(player+" Wins"); //Pop up stating X wins
                  restart()           //Function call to restart the game
              }else if(player === 'o'){  //If parameter is o
                  oWin++;             //Incrementing O win count
                  alert(player+" Wins"); //Pop up stating O wins
                  restart();          //Function call to restart the game
              }
            }  
          </pre>
        </div>
        <p class="grey--text ma-5">
              winCount is a really simple function, which keeps are track of the number of times each player won, winCount accepts one argument which will only hold one of two values either x or o, 
              if x wins, the xWin value will increase by 1, winCount will also push a alter to display which player won the match and then call restart function, the same applies if o wins.  
        </p>

        <div style="border:1px solid black; overflow:auto;background-color:#2e2e1f;" class="white--text ma-5">
          <br/><h2 class="text-center">  Function to restart the game </h2><br/>
          <pre>
            function restart(){
                gameBoard = ['','','','','','','','',''];              // Resetting gameBoard to empty array
                turn = 'x'; 
                tracker = 0;                                          //Initializing turn 
                let buttons = document.getElementsByClassName("bt");  // Declaring array to store all elements with the bt class 
                Array.from(buttons).forEach(button =>{               //Looping through all elements with bt class
                    button.disabled=false;                          //Enabling the button
                    button.innerHTML = ''                           //Removing the value from button
                });
                document.getElementById('win').innerHTML ="X : "+ xWin+"  O : "+ oWin; // Displaying total wins for X and O
            } 
          </pre>
        </div>
        <p class="grey--text ma-5">
            The restart function sets the default value for all the variables, like gameBoard array and turn.<br/><br/>
            We have one additional variable declared named buttons, which will hold all the elements which have a class of bt, if you get back to the HTML page you will see all buttons have bt as a common class, as there are multiple buttons in the HTML page with bt class name the buttons variable will be an array<br/><br/>
            Here we are using forEach to loop through each button to enable it and remove the value. 
            and finally we are using document.getElementById('win') to display how many times X and O won.<br/><br/>
            Note: win is an id given to h1 tag in the HTML section.
        </p>
        <div style="border:1px solid black; overflow:auto;background-color:#2e2e1f" class="white--text">
          <pre>
            <h1 class="text-center"> Final Code (save as index.html)</h1>
            {{code}}
            &lt;script&gt;
              let gameBoard = ['','','','','','','','','']; //Array to keep track of x and o positions
              let xWin = 0; //Used to track the number of times X won
              let oWin = 0; //Used to track the number of times O won
              let tracker = 0; // Used to identify draw games
              let winConditions = [
              [0,1,2],
              [3,4,5],
              [6,7,8],
              [0,3,6],
              [1,4,7],
              [2,5,8],
              [0,4,8],
              [2,4,6]
              ]; //All possible winning conditions.
              let condition = []; // Used to store conditions in loop
              let turn  = 'x' // Used to keep track of player turn
              function checkTurn(position){ 
                  if(turn === 'x'){  
                      gameBoard[position] = 'x';                        // Storing x in position 
                      document.getElementById(position).innerHTML='x';  // Displaying X in the box 
                      document.getElementById(position).disabled=true;  //Disabling the button 
                      turn= 'o';                                        //Changing Turn 
                      tracker++;                                        //Incrementing tracker to track draw
                  }else{
                      gameBoard[position] = 'o';                        // Storing x in position
                      document.getElementById(position).innerHTML='o';  // Displaying O in the box 
                      document.getElementById(position).disabled=true;  //Disabling the button 
                      turn= 'x';                                        //Changing Turn
                      tracker++;                                        //Incrementing tracker to track draw
                  }    
                  winCheck();                                           //Function call to check game win
                }
                function winCheck(){
                    for(i =0 ; i  &lt;=7; i++){             //winConditions have 8 sub array, index starts from 0
                    let condition = winConditions[i];  //Declaring new array to store each sub array of winConditions.
                    box1 = gameBoard[condition[0]]; //storing value from winConditions sub array position 1
                    box2 = gameBoard[condition[1]]; //storing value from winConditions sub array position 2
                    box3 = gameBoard[condition[2]]; //storing value from winConditions sub array position 3
                    if(box1 == '' || box2 == '' || box3 == ''){
                        continue;                   //If any of the position is empty, the current iteration will be skipped 
                    }
                    if(box1 === box2 && box2 === box3){
                      return  winCount(box1)            //Function call for winCount if any winCondition is matched
                    }
                }
                if(tracker > 9){                    //If tracker reaches 10 that means the match is a Draw
                      alert("Draw")                     //Pop up stating match Draw
                      restart();                         //Function call to restart the game
                }
              }
              function winCount(player){   //Win count accepts winning character as parameter i.e X or O  
                if(player === 'x'){        //If parameter is x
                    xWin++;             //Incrementing X win count
                    alert(player+" Wins"); //Pop up stating X wins
                    restart()           //Function call to restart the game
                }else if(player === 'o'){  //If parameter is o
                    oWin++;             //Incrementing O win count
                    alert(player+" Wins"); //Pop up stating O wins
                    restart();          //Function call to restart the game
                }
            }
            function restart(){
                gameBoard = ['','','','','','','','',''];              // Resetting gameBoard to empty array
                turn = 'x';                                            //Initializing turn 
                tracker = 0;
                let buttons = document.getElementsByClassName("bt");  // Declaring array to store all elements with the bt class 
                Array.from(buttons).forEach(button =>{               //Looping through all elements with bt class
                    button.disabled=false;                          //Enabling the button
                    button.innerHTML = ''                           //Removing the value from button
                });
                document.getElementById('win').innerHTML ="X : "+ xWin+"  O : "+ oWin; // Displaying total wins for X and O
            } 
            &lt;/script&gt;
            &lt;/body&gt;
            &lt;/html&gt;
          </pre>
        </div>
      </v-container>
      <h1 class="grey--text text-center">The End</h1>
  </div>
  
</template>

<script>

export default {
  data(){
    return{
    gameBoard: ['','','','','','','','',''],
    xWin: 0,
    oWin: 0,
    tracker: 0,
    conditions: [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ],
    condition: [],
    turn: 'x',
    code: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        button{ /*Basic style for buttons*/
          height:100px;
          width:100px;
          font-size:30px;
        }
      </style>
    </head>
    <body>
    <table>
        <tr>
            <td>
                <button class="bt" id="0" onclick="checkTurn(0)"></button>
            </td>
            <td>
                <button class="bt" id="1" onclick="checkTurn(1)"></button>
            </td>
            <td>
                <button class="bt" id="2" onclick="checkTurn(2)"></button>
            </td>
        </tr>
        <tr>
            <td>
                <button class="bt" id="3" onclick="checkTurn(3)"></button>
            </td>
            <td>
                <button class="bt" id="4" onclick="checkTurn(4)"></button>
            </td>
            <td>
                <button class="bt" id="5" onclick="checkTurn(5)"></button>
            </td>
        </tr>
        <tr>
            <td>
                <button class="bt" id="6" onclick="checkTurn(6)"></button>
            </td>
            <td>
                <button class="bt" id="7" onclick="checkTurn(7)"></button>
            </td>
            <td>
                <button class="bt" id="8" onclick="checkTurn(8)"></button>
            </td>
        </tr>
      </table>
      <h1 id='win'></h1>
    `,    
    }
  }, 
 
  methods:{
   checkTurn: function(position){
        if(this.turn === 'x'){
        this.gameBoard[position] = 'x';
        document.getElementById(position).innerHTML='x';
        document.getElementById(position).disabled=true;
        this.turn= 'o';
        this.tracker++;
        }else{
        this.gameBoard[position] = 'o';
        document.getElementById(position).innerHTML='o';
        document.getElementById(position).disabled=true;
        this.turn= 'x'; 
        this.tracker++; 
    }    
    this.winCheck();
   },
   winCheck: function(){
    for(let i = 0 ; i <=7; i++){
        let condition = this.conditions[i];
        let bx1 = this.gameBoard[condition[0]];
        let bx2 = this.gameBoard[condition[1]];
        let bx3 = this.gameBoard[condition[2]];
        if(bx1 == '' || bx2 == '' || bx3 == ''){
            continue;
        }
        if(bx1 === bx2 && bx2 === bx3){
            this.winCount(bx1)
            break;
        }
    }
    if(this.tracker >= 9){
            setTimeout(() => {
                alert("Draw");
                this.restart();   
            }, 100);
    }
 },
winCount: function(win){
    if(win === 'x'){
        this.xWin++;
        alert(" X Wins ");
        this.restart()
    }else if(win === 'o'){
        this.oWin++;
        alert(" O Wins ");
        this.restart()
    }
    
    
 },
 restart: function(){
    this.gameBoard = ['','','','','','','','',''];
    this.turn = 'x';
    this.tracker = 0;
    let buttons = document.getElementsByClassName("bt");
    buttons.forEach(button =>{
        button.disabled=false;
    });
    buttons.forEach(button =>{
        button.innerHTML='';
    });
    },
    visitor: function(){
      let dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
      let visitor = window.location.href.toString().slice(7).slice(0,-1);
      let page = this.$route.name;
       fetch('https://professorscollab.xyz:8443/api/visitor',{
        method:'POST',
        body: JSON.stringify({ 
        visitor: visitor, 
        page: page, 
        dateTime: dateTime 
        }), 
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        }
      })
      return; 
    }

 }
}
</script>

<style>
.topic.availableClass{
  border-left: 8px solid green;
}
.topic.notavailableClass{
  border-left: 8px solid gray;
}
.gameButton{
    width: 50px;
    height: 50px;
}
</style>
