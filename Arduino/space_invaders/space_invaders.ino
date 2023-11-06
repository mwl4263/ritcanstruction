// Pin numbers
const int buttonPin = 2;
const int directionPin = 51;
const int stepPin = 49;

// Other constants
const int NumSteps = 32500; // steps
const int Speed = 50; // how fast the motor will "step"

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(directionPin, OUTPUT);
  pinMode(stepPin, OUTPUT);
  digitalWrite(directionPin, LOW);
  digitalWrite(stepPin, LOW);
    Serial.begin(9600);

}

void loop() {
    int del = random(3000, 10000);
    // Move in one direction
    for (float distance = 0.5; distance < NumSteps; distance += 0.5) {
      digitalWrite(stepPin, HIGH);
      delayMicroseconds(Speed);
      digitalWrite(stepPin, LOW);
      delayMicroseconds(Speed);
    }
    delay(del);
    // Reverse direction
    Serial.println(digitalRead(directionPin));
    digitalWrite(directionPin, !digitalRead(directionPin));

}