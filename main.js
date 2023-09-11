x = 0;
y = 0;

drawCircle = "";
drawRect = "";

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "O sistema esta ouvindo por favor fale";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "A fala foi reconhecida como: " + content;
    if(content == "círculo")
    {
        x = Math.floor(Math.random()*950);
        y = Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML = "Desenhando um Círculo";
        drawCircle = "set"
    }
    if(content == "retangulo")
    {
        x = Math.floor(Math.random()*950);
        y = Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML = "Desenhando um Retangulo";
        drawRect = "set"
    }
}

function setup()
{
    canvas = createCanvas(950, 500);
}

function draw()
{
    if(drawCircle = "set")
    {
        radius = Math.floor(Math.random()*100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Círculo desenhado";
        drawCircle = "";
    }
    if(drawRect = "set")
    {
        rect(x, y, 75, 55);
        document.getElementById("status").innerHTML = "Retangulo desenhado";
        drawRect = "";
    }
}


