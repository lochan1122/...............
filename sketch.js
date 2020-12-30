var gameState="start1";
var backGround,backGroundImage;
var player,playerImage;
function preload()
{
    startImage=loadImage("Images/img222.png");
    backGroundImage=loadImage("Images/bg3.jpg");
    playerImage=loadAnimation("Images/img1.png","Images/img2.png","Images/img3.png","Images/img4.png");
}
function setup(){
    var canvas = createCanvas(1000,600);
   // start = createSprite(600,300,1200,600);

   //creating background image
   backGround=createSprite(600,300,3200,600);
   backGround.addImage("background",backGroundImage);
   backGround.scale=2;
   backGround.x = backGround.width /2;
   //creating player
   
}

function draw()
{
    background(0);
    
    if (gameState==="start1")
    {
        
        textSize(50);
        text("Welome to Time Zone Machine", 200, 200);
        text("PrEss EnTeR To CoNtInUe", 200, 250);
        if(keyDown("c"))
        {
            gameState="play";
    
        }
    }
   
       
        if(gameState==="play")
        {
            backGround.velocityX=-7;

            //infinite background 
            if(backGround.x<0)
            {
                backGround.x=width/2;
            }

            
            console.log(backGround.x);
        }
      
    drawSprites();
}

