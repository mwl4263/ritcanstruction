#include <AccelStepper.h>

 
AccelStepper stepper(AccelStepper::FULL2WIRE, 49,51);

void setup()
{  
  Serial.begin(9600);
  Serial.println("Start");
   stepper.setMaxSpeed(200);
   stepper.setSpeed(200);    
      stepper.moveTo(20);    
}
 
void loop()
{  
    stepper.enableOutputs();


    stepper.run();
  
    // delay(250);
  //  stepper.moveTo(0);
  //  delay(250);
  //  stepper.moveTo(180);
  //  delay(250);
  //  stepper.moveTo(0);

}