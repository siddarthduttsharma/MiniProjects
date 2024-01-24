var start = new Date().getTime();

// function responsible for the box movement
function move() {
    var left = Math.random() * 300 + "px";
    var top = Math.random() * 300 + "px";
    var wh = (Math.random() * 400 + 100) + "px";
    var color = getRandomColor();
    
    document.getElementById("shape").style.left = left;
    document.getElementById("shape").style.top = top;
    document.getElementById("shape").style.width = wh;
    document.getElementById("shape").style.height = wh;
    document.getElementById("shape").style.backgroundColor = color;
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

// function responsible for the random color of the box
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

move();

//Here we are calculating the click time
document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    alert(timeTaken);
    move();
}
