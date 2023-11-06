int dirDown = 7;
int dirUp = 6;
int dirRight = 5;
int dirLeft = 4;

// Pin numbers
const int buttonPin = 2;
const int directionPin = 51;
const int stepPin = 49;

// Other constants
const int NumSteps = 32500;  // steps
const int Speed = 50;        // how fast the motor will "step"

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(directionPin, OUTPUT);
  pinMode(stepPin, OUTPUT);
  digitalWrite(directionPin, LOW);
  digitalWrite(stepPin, LOW);
  pinMode(dirDown, INPUT);
  pinMode(dirUp, INPUT);
  pinMode(dirRight, INPUT);
  pinMode(dirLeft, INPUT);

  Serial.begin(9600);
}

void loop() {
  if (digitalRead(dirDown) == LOW) {
    Serial.println("Down");
  } else if (digitalRead(dirUp) == LOW) {
    Serial.println("UP");
  } else if (digitalRead(dirRight) == LOW) {
          Serial.println("Right");
    digitalWrite(directionPin, LOW);
        for (int distance = 0; distance < 500; distance += 5) {
      digitalWrite(stepPin, HIGH);
      delayMicroseconds(Speed);
      digitalWrite(stepPin, LOW);
      delayMicroseconds(Speed);
      }
  


  } else if (digitalRead(dirLeft) == LOW) {
    Serial.println("Left");
     digitalWrite(directionPin, HIGH);
        for (int distance = 0; distance < 500; distance += 5) {
      digitalWrite(stepPin, HIGH);
      delayMicroseconds(Speed);
      digitalWrite(stepPin, LOW);
      delayMicroseconds(Speed);
      }
  } else {
    Serial.println("Stop");
  }

    // delay(0);
}