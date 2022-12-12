#include <MQ2.h>
#include <dht.h>	// Include library
#define outPin 8	    // Digital pin connected to the DHT sensor

#define DHTTYPE DHT11   // DHT 11


dht DHT;	
int pin = A1;
MQ2 mq2(pin);

void setup() {
  Serial.begin(9600);
  
  mq2.begin();
  
}

void loop() {
  int readData = DHT.read11(outPin);

	float t = DHT.temperature;	// Read temperature
	float h = DHT.humidity;		// Read humidity

	Serial.print("Temperature = ");
	Serial.print(t);
	Serial.print("°C | ");
	Serial.print((t*9.0)/5.0+32.0);	// Convert celsius to fahrenheit
	Serial.println("°F ");
	Serial.print("Humidity = ");
	Serial.print(h);
	Serial.println("% ");
	Serial.println("");

	delay(2000); // wait two seconds
  MQ2();
}

void MQ2() {
  /*Reading all three gases at once in PPM
   * No.1 = LPG Gas
   * no.2 = CO gas
   * n0.3 = SMOKE
   */




  float* values = mq2.read(true);  //true to print the values in the Serial

  int LPG = mq2.readLPG();
  int Co = mq2.readCO();
  int Smoke = mq2.readSmoke();
delay(1000);
}