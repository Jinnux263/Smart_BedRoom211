const axios = require('axios');

async function AdafruitGetFanData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-fan')
    .then(response => {
        return response.data.last_value === "1"
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitGetBulbData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-led')
    .then(response => {
        return response.data.last_value === "3"
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitGetAutoBulbData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/auto-led')
    .then(response => {
        return response.data.last_value === "7"
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitGetAutoFanData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/auto-fan')
    .then(response => {
        return response.data.last_value === "5"
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitGetLightSensorData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-light')
    .then(response => {
        return parseInt(response.data.last_value, 10)
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitGetHumidityData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-humidity')
    .then(response => {
        return parseInt(response.data.last_value, 10)
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitGetDHT11SensorData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-temperature')
    .then(response => {
        return parseInt(response.data.last_value, 10)
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitGetInfraredSensorData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-infrared')
    .then(response => {
        return response.data.last_value === "0"
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitTurnAutoBulb (isOn) {
    value = isOn ? "7" : "6";
    return axios.post('https://io.adafruit.com/api/feeds/auto-led/data', 
    {"value": value}, {
        headers: {"x-aio-key": "aio_iMNx83QpxPntelWt2VVCOCxse9fm"}
    })
    .then(response => "Success!")
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitTurnAutoFan (isOn) {
    value = isOn ? "5" : "4";
    return axios.post('https://io.adafruit.com/api/feeds/auto-fan/data', 
    {"value": value}, {
        headers: {"x-aio-key": "aio_iMNx83QpxPntelWt2VVCOCxse9fm"}
    })
    .then(response => "Success!")
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitTurnBulb (isOn) {
    value = isOn ? "3" : "2";
    return axios.post('https://io.adafruit.com/api/feeds/co3109-led/data', 
    {"value": value}, {
        headers: {"x-aio-key": "aio_iMNx83QpxPntelWt2VVCOCxse9fm"}
    })
    .then(response => "Success!")
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitTurnFan (isOn) {
    value = isOn ? "1" : "0";
    return axios.post('https://io.adafruit.com/api/feeds/co3109-fan/data', 
    {"value": value}, {
        headers: {"x-aio-key": "aio_iMNx83QpxPntelWt2VVCOCxse9fm"}
    })
    .then(response => "Success!")
    .catch(error => {
        console.log(error);
    });
}


module.exports = {
    AdafruitGetFanData,
    AdafruitGetBulbData,
    AdafruitGetAutoBulbData,
    AdafruitGetAutoFanData,
    AdafruitGetLightSensorData,
    AdafruitGetHumidityData,
    AdafruitGetDHT11SensorData,
    AdafruitGetInfraredSensorData,
    AdafruitTurnAutoBulb,
    AdafruitTurnAutoFan,
    AdafruitTurnBulb,
    AdafruitTurnFan,

}