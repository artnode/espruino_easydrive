/* MOJA 2015 - control an Stepper via EasyDrive board */

function easyDrive(stepPin, dirPin, deg)
{

  if (deg<0)
  {
    digitalWrite(dirPin,0);
  }
  else
  {
    digitalWrite(dirPin,1);
  }
    
  
var fullTurn=1600;
var turnSteps = fullTurn*Math.abs(deg);
 
 

 for (i=0; i<turnSteps; i=i+1)
 {
   digitalWrite(stepPin,1);
   digitalWrite(stepPin,0);
 }
               
}
