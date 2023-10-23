window.addEventListener('load', function ()
{
    let board = document.getElementById("board");
    let gameBoardDiv = board.querySelectorAll("div");
    const tiles = Array.from(board.getElementsByTagName("div"));
    let grid=["None","None","None","None","None","None","None","None","None"];
    let play="X";

    gameBoardDiv.forEach((square) =>
    {
        square.classList.add("square"); // Exercise 1
        square.addEventListener("click",function()
        {
            if(grid[tiles.indexOf(square)] =="None" )
            {
                
                if(play == "X")
                {
                   grid[tiles.indexOf(square)]= play;
                   square.textContent= play;
                   square.classList.add('square', 'X');
                   play= "O";  
                 }
                 
                else if (play == "O")
                 { 
                   grid[tiles.indexOf(square)]= play
                   square.textContent= play;
                   square.classList.add('square', 'O');
                   play= "X";
                 }  
                 
            }
               

        });
    });
});
