function Converter(TemperatureF) {
    TemperatureF = parseFloat(TemperatureF);
    document.getElementById('result').innerHTML = (TemperatureF -32)/1.8;
}
