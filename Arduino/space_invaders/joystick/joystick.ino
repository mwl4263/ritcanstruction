#include <AccelStepper.h>

int dirDown = 7;
int dirUp = 6;
int dirRight = 5;
int dirLeft = 4;
int pos = 0;
// Pin numbers
// const int buttonPin = 2;
const int directionPin = 51;
const int stepPin = 49;
const int maxMove = 450
// Other constants
const int NumSteps = 32500;  // steps
const int Speed = 50;        // how fast the motor will "step"
AccelStepper stepper(AccelStepper::FULL2WIRE, 49, 51 );
void setup() {

  
  stepper.setMaxSpeed(200.0);
  stepper.setAcceleration(100.0);
  // pinMode(buttonPin, INPUT);
  pinMode(directionPin, OUTPUT);
  pinMode(stepPin, OUTPUT);
  digitalWrite(directionPin, LOW);
  digitalWrite(stepPin, LOW);
  pinMode(dirDown, INPUT);
  pinMode(dirUp, INPUT);
  pinMode(dirRight, INPUT);
  pinMode(dirLeft, INPUT);
  stepper.setCurrentPosition(pos);
  Serial.begin(9600);
}

void loop() {
  if (digitalRead(dirDown) == LOW) {
    Serial.println("Down");
  } else if (digitalRead(dirUp) == LOW) {
    Serial.println(stepper.currentPosition());
    Serial.println("UP");
  } else if (digitalRead(dirRight) == LOW && pos < maxMove) {
     pos+=1;
          Serial.println(pos);
    digitalWrite(directionPin, LOW);
        for (int distance = 0; distance < 500; distance += 5) {
         
        stepper.setCurrentPosition(pos);
      digitalWrite(stepPin, HIGH);
      delayMicroseconds(Speed);
      digitalWrite(stepPin, LOW);
      delayMicroseconds(Speed);
      }
  


  } else if (digitalRead(dirLeft) == LOW && pos > 0) {
     pos-=1;
    Serial.println(pos);
     digitalWrite(directionPin, HIGH);
        for (int distance = 0; distance < 500; distance += 5) {
         
          stepper.setCurrentPosition(pos);
      digitalWrite(stepPin, HIGH);
      delayMicroseconds(Speed);
      digitalWrite(stepPin, LOW);
      delayMicroseconds(Speed);
      }
  } else {
    Serial.println(pos);
  }

    // delay(0);
}