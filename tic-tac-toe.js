window.addEventListener('load', function ()
{
    let board = document.getElementById("board");
    let gameBoardDiv = board.querySelectorAll("div");
    const tiles = Array.from(board.getElementsByTagName("div"));
    let gird=["None","None","None","None","None","None","None","None","None"];
    let play="X";

    gameBoardDiv.forEach((square) =>
    {
        square.classList.add("square"); // Exercise 1
        square.addEventListener("click",function()
        {
            if(gird[tiles.indexOf(square)] =="None" )
            {
                
                if(play == "X")
                {
                   gird[tiles.indexOf(square)]= play;
                   square.textContent= play;
                   play= "O";
                   square.classList.add('square', 'X');
                 }
                 
                else if (play == "O")
                 { 
                   gird[tiles.indexOf(square)]= play
                   square.textContent= play;
                   play= "X";
                   square.classList.add('square', 'O');
                 
                 }  
                 
            }
               

        });
    });
});
