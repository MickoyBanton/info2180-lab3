window.addEventListener('load', function ()
{
    let board = document.getElementById("board");
    let gameBoardDiv = board.querySelectorAll("div");
    const tiles = Array.from(board.getElementsByTagName("div"));
    let grid=["None","None","None","None","None","None","None","None","None"];
    let play="X";
    const status = document.getElementById("status");
    let newGameButton = document.getElementsByClassName("btn")[0];

    let isWin = function(square)
    {
        let playerMove = grid[square]


        if (square == 0) 
        {
            if ((grid[3] == playerMove & grid[6] == playerMove) || (grid[4] == playerMove && grid[8] == playerMove) || (grid[1] == playerMove & grid[2] == playerMove))
            {
                return true
            }
        }
        else if (square == 1) 
        {
            if ((grid[4] == playerMove & grid[7] == playerMove) || (grid[0] == playerMove & grid[3] == playerMove))
            {
                return true
            }
        }
        else if (square == 2) 
        {
            if ((grid[5] == playerMove & grid[8] == playerMove) || (grid[0] == playerMove & grid[1] == playerMove) ||(grid[4] == playerMove && grid[6] == playerMove))
            {
                return true
            }
        }

        else if (square == 3) 
        {
            if ((grid[0] == playerMove & grid[6] == playerMove) || (grid[4] == playerMove & grid[5] == playerMove))
            {
                return true
            }
        }
        else if (square == 4) 
        {
            if ((grid[2] == playerMove & grid[6] == playerMove) || (grid[0] == playerMove & grid[8] == playerMove) || (grid[3] == playerMove && grid[5] == playerMove)|| (grid[1] == playerMove && grid[7] == playerMove))
            {
                return true
            }
        }
        else if (square == 5) 
        {
            if ((grid[2] == playerMove & grid[8] == playerMove) || (grid[3] == playerMove & grid[4] == playerMove))
            {
                return true
            }
        }

        else if (square == 6) 
        {
            if ((grid[2] == playerMove & grid[5] == playerMove) || (grid[7] == playerMove && grid[8] == playerMove) || (grid[0] == playerMove & grid[3] == playerMove))
            {
                return true
            }
        }
        else if (square == 7) 
        {
            if ((grid[1] == playerMove & grid[4] == playerMove) || (grid[6] == playerMove & grid[8] == playerMove))
            {
                return true
            }
        }
        else if (square == 8) 
        {
            if ((grid[2] == playerMove & grid[5] == playerMove) || (grid[6] == playerMove && grid[7] == playerMove) || (grid[0] == playerMove & grid[4] == playerMove))
            {
                return true
            }
        }
        return false
        
    }
    

    gameBoardDiv.forEach((square) =>
    {
        square.classList.add("square");

        square.addEventListener("mouseover", () => 
        {
            square.classList.add("hover");
        });

        square.addEventListener("mouseout", () => 
        {
            square.classList.remove("hover")
        });
        
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

                   if(isWin(tiles.indexOf(square)) == true)
                   {
                    status.innerText= "Congratulations! "+play+" is the Winner!";
                    status.classList.add("you-won");
                   }
                 }
                 
                else if (play == "O")
                 { 
                   grid[tiles.indexOf(square)]= play
                   square.textContent= play;
                   square.classList.add('square', 'O');
                   play= "X";

                   if(isWin(tiles.indexOf(square)) == true)
                   {
                    status.innerText= "Congratulations! "+play+" is the Winner!";
                    status.classList.add("you-won");
                   }
                 }  
                 
            }

            newGameButton.addEventListener("click",function()
            {
                location.reload();
            });

        });
        
        
    });

});
