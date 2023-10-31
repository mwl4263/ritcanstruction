// Pin numbers
const int buttonPin = 2;
const int directionPin = 51;
const int stepPin = 49;

// Other constants
const int NumSteps = 10000; // steps
const int Speed = 100; // how fast the motor will "step"

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(directionPin, OUTPUT);
  pinMode(stepPin, OUTPUT);
  digitalWrite(directionPin, LOW);
  digitalWrite(stepPin, LOW);
}

void loop() {

    // Move in one direction
    for (int distance = 0; distance < NumSteps; distance++) {
      digitalWrite(stepPin, HIGH);
      delayMicroseconds(Speed);
      digitalWrite(stepPin, LOW);
      delayMicroseconds(Speed);
    }
    delay(1000);
    // Reverse direction
    digitalWrite(directionPin, !digitalRead(directionPin));
delay(5);
}