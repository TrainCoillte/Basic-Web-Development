//declares the variables for the game and sets
//background color
//the game works. the only problem is the sequence doesnt play from the start each time but it needs the user 
//to click the buttons in the correct order to play.
document.body.style.background = "purple";
var currentgame=[];
var counttrack=[];
  var track= [];
var high = 0;
 var count = 0;
document.getElementById("select").onclick=startgame;

//code to have the buttons flash for the first few seconds then resets the brightness
function startgame()
{
  
document.getElementById("circle").style.filter = "brightness(200%)";
   
  setTimeout(function(){
     document.getElementById("circle").style.filter = "brightness(20%)";
  },3000);
  
  document.getElementById("circle1").style.filter = "brightness(200%)";
  setTimeout(function(){
     document.getElementById("circle1").style.filter = "brightness(20%)";
  },3000);
  
   document.getElementById("circle2").style.filter = "brightness(200%)";
  setTimeout(function(){
     document.getElementById("circle2").style.filter = "brightness(20%)";
  },3000);
  
  document.getElementById("circle3").style.filter = "brightness(200%)";
  setTimeout(function(){
     document.getElementById("circle3").style.filter = "brightness(20%)";
  },3000);
  
  document.getElementById("light").style.backgroundColor = "green";
   addcircle()
}
//function that pulls a random element from the array of options
function addcircle ()
{
  var choices =  ["#circle","#circle1","#circle2","#circle3"];
  choices[0]=0;
  choices[1]=1;
  choices[2]=2;
  choices[3]=3;
  var random = (choices[Math.floor(Math.random()*3)]);
  
currentgame.push(random);
//setTimeout here waits to let the Sequence function run.
  setTimeout(function(){
     Sequence(currentgame[currentgame.length - 1]);
  changeLevel();
    player=[];
  },3000);
   
 }
 
//function to have the buttons flash
//attempt at getting the sequence to flash each round fully by using the for loop.
function Sequence(element)
{
  for(var i=0; i<=currentgame.length-1;i++)
    {
      console.log(currentgame.length);
    
  if(element==0)
    {

 console.log("hello");
       document.getElementById("circle").style.filter = "brightness(200%)";
   
  setTimeout(function(){
     document.getElementById("circle").style.filter = "brightness(20%)";
  },900);
    }
  
  else if(element==1)
    {
      
 console.log("helo");
       document.getElementById("circle1").style.filter = "brightness(200%)";
   
  setTimeout(function(){
     document.getElementById("circle1").style.filter = "brightness(20%)";
  },900);
      
    }
  
  else if(element==2)
    {
 console.log("heo");
       document.getElementById("circle2").style.filter = "brightness(200%)";
   
  setTimeout(function(){
     document.getElementById("circle2").style.filter = "brightness(20%)";
  },900);

    }
  
  else if(element==3)
    {

 console.log("hell");
       document.getElementById("circle3").style.filter = "brightness(200%)";
   
  setTimeout(function(){
     document.getElementById("circle3").style.filter = "brightness(20%)";
  },900);
    }
    }

}
//if a button in the class colorbutton is clicked activate the SequenceArray function
$(".colorbutton").click(function SequenceArray()
  {
  //set userClick to be the id that has been clicked
    var userClick=$(this).attr("id");
  //if else statements to make the buttons click. also calls the relevant element in Sequence to mke button flash 
  // also pushes an element into the track array to be compared against currentgame array
  if(userClick == "circle")
    {
      track.push(0);
    Sequence(0);
    }
  
  else if(userClick=="circle1")
    {
    track.push(1);
      Sequence(1);
    }
  
  else if(userClick == "circle2")
    {
    track.push(2);
      Sequence(2);
    }
  
  else if(userClick == "circle3")
    {
      track.push(3);
      Sequence(3);
    }
  
  else
    {
      setTimeout(function(){
       reset();
      },5000);
     
    }

     check(track.length-1);
 })
//this function just changes the count each time and sets the counter to be that value
function changeLevel()
{
count++;
 $("#counter").text(count);
 
}
//this function compares the index's of the two array against each other. if true run game, if false go to reset
 function check(indexOfArray)
 {
   if(track[indexOfArray]===currentgame[indexOfArray])
     {
       if(currentgame.length === track.length)
         {
          setTimeout(function(){
            track=[];
          addcircle();
          },1000)
         }
     }
   
   else
     {
      reset();
     }
}
 //reset function which empties track array,resets game variables and sets high score. also makes buttons flash 5 times.
  function reset()
{
 
 if(count>high)
   {
     high=count;
     
    $("#lvl").text(high);
   }
  count=0;
  currentgame = [];
  track = [];
$("#counter").text(count); 
  document.getElementById("light").style.backgroundColor = "red";
  
  setTimeout(function(){
    circle.style.filter="brightness(0%)";
},1000)
  setTimeout(function(){
    circle1.style.filter="brightness(0%)";
},1000)
  setTimeout(function(){
    circle2.style.filter="brightness(0%)";
},1000)
  setTimeout(function(){
    circle3.style.filter="brightness(0%)";
},1000)
  setTimeout(function(){
    circle.style.filter="brightness(200%)";
},2000)
  setTimeout(function(){
    circle2.style.filter="brightness(200%)";
},2000)
  setTimeout(function(){
    circle3.style.filter="brightness(200%)";
},2000)
  setTimeout(function(){
    circle1.style.filter="brightness(200%)";
},2000)
   setTimeout(function(){
    circle.style.filter="brightness(0%)";
},3000)
  setTimeout(function(){
    circle1.style.filter="brightness(0%)";
},3000)
  setTimeout(function(){
    circle2.style.filter="brightness(0%)";
},3000)
  setTimeout(function(){
    circle3.style.filter="brightness(0%)";
},3000)
  setTimeout(function(){
    circle.style.filter="brightness(200%)";
},4000)
  setTimeout(function(){
    circle1.style.filter="brightness(200%)";
},4000)
  setTimeout(function(){
    circle2.style.filter="brightness(200%)";
},4000)
  setTimeout(function(){
    circle3.style.filter="brightness(200%)";
},4000)
  
   setTimeout(function(){
    circle.style.filter="brightness(0%)";
},5000)
   setTimeout(function(){
    circle1.style.filter="brightness(0%)";
},5000)
   setTimeout(function(){
    circle2.style.filter="brightness(0%)";
},5000)
   setTimeout(function(){
    circle3.style.filter="brightness(0%)";
},5000)
   setTimeout(function(){
    circle.style.filter="brightness(200%)";
},6000)
   setTimeout(function(){
    circle1.style.filter="brightness(200%)";
},6000)
   setTimeout(function(){
    circle2.style.filter="brightness(200%)";
},6000)
   setTimeout(function(){
    circle3.style.filter="brightness(200%)";
},6000)
   setTimeout(function(){
    circle.style.filter="brightness(0%)";
},7000)
  setTimeout(function(){
    circle1.style.filter="brightness(0%)";
},7000)
  setTimeout(function(){
    circle2.style.filter="brightness(0%)";
},7000)
  setTimeout(function(){
    circle3.style.filter="brightness(0%)";
},7000)
  setTimeout(function(){
    circle.style.filter="brightness(200%)";
},8000)
  setTimeout(function(){
    circle1.style.filter="brightness(200%)";
},8000)
  setTimeout(function(){
    circle2.style.filter="brightness(200%)";
},8000)
  setTimeout(function(){
    circle3.style.filter="brightness(200%)";
},8000)
  
  setTimeout(function(){
    circle.style.filter="brightness(0%)";
},9000)
  setTimeout(function(){
    circle1.style.filter="brightness(0%)";
},9000)
  setTimeout(function(){
    circle2.style.filter="brightness(0%)";
},9000)
  setTimeout(function(){
    circle3.style.filter="brightness(0%)";
},9000)
  setTimeout(function(){
    circle.style.filter="brightness(200%)";
},10000)
  setTimeout(function(){
    circle1.style.filter="brightness(200%)";
},10000)
  setTimeout(function(){
    circle2.style.filter="brightness(200%)";
},10000)
  setTimeout(function(){
    circle3.style.filter="brightness(200%)";
},10000)
  
   setTimeout(function(){
    circle.style.filter="brightness(20%)";
},11000)
  
   setTimeout(function(){
    circle1.style.filter="brightness(20%)";
},11000)
   setTimeout(function(){
    circle2.style.filter="brightness(20%)";
},11000)
   setTimeout(function(){
    circle3.style.filter="brightness(20%)";
},11000)
}