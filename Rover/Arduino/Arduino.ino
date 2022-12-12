#include <DHT_U.h>
#include <DHT.h>

#define DHTPIN 7         // DHT11 Output Pin connection
#define DHTTYPE DHT11     // DHT Type is DHT11

DHT dht(DHTPIN, DHTTYPE);   // Initialize DHT sensor

void setup () {
  dht.begin();
  Serial.begin(9600);         // To see data on serial monitor
}

void loop (){

    float H = dht.readHumidity();     //Read Humidity
    float T = dht.readTemperature();    // Read temperature as Celsius

    // Check if any reads failed and if exit
    if (isnan(H) || isnan(T)){
      Serial.println("Failed to read from DHT sensor!");
      return;
    }
 
    // Combine Humidity and Temperature into single string
    String dhtData = String(H) + "," + String(T);
    Serial.println(dhtData);
    delay(2000);   // Wait two seconds between measurements
}
