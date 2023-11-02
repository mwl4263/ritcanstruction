// Pin numbers
const int buttonPin = 2;
const int directionPin = 51;
const int stepPin = 49;

// Other constants
const int NumSteps = 30000; // steps
const int Speed = 50; // how fast the motor will "step"

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(directionPin, OUTPUT);
  pinMode(stepPin, OUTPUT);
  digitalWrite(directionPin, LOW);
  digitalWrite(stepPin, LOW);
}

void loop() {

    // Move in one direction
    for (float distance = 0.5; distance < 32500; distance += 0.5) {
      digitalWrite(stepPin, HIGH);
      delayMicroseconds(Speed);
      digitalWrite(stepPin, LOW);
      delayMicroseconds(Speed);
    }
    delay(5000);
    // Reverse direction
    digitalWrite(directionPin, !digitalRead(directionPin));

}