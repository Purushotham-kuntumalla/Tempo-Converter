function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var result = document.getElementById("result");
    var weatherImage = document.getElementById("weatherImage");

    if (unit === "fahrenheit") {
        temperature = (temperature - 32) * 5 / 9;
        console.log(temperature)
    } else {
        temperature = temperature * 9 / 5 + 32;
        
    }

    result.innerText = "Converted Temperature: " + temperature.toFixed(2) + " °" + unit.charAt(0).toUpperCase() + unit.slice(1);

    if (temperature <= 0) {
        weatherImage.src = "https://t3.ftcdn.net/jpg/03/46/60/58/360_F_346605880_fhQ0rLxCplUqg1SE21pFloPFiBQcVLC0.webp";
    } else {
        weatherImage.src = "https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?cs=srgb&dl=pexels-pixabay-355508.jpg&fm=jpg";
    }
}


