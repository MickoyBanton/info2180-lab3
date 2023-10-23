window.addEventListener('load', function ()
{
    let gameBoardDiv = board.querySelectorAll("div");
    
    gameBoardDiv.forEach((square) =>
    {
        square.classList.add("square"); // Exercise 1
    });
});