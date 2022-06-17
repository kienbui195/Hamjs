function Converter(TemperatureF) {
    TemperatureF = parseFloat(TemperatureF);
    document.getElementById('result').innerHTML = 'Celcius: ' + (TemperatureF -32)/1.8;
}
