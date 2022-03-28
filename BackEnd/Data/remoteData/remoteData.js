const axios = require('axios');

async function AdafruitGetFanData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-fan')
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitGetBulbData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-led')
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitGetAutoLedData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/auto-led')
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitGetAutoFanData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/auto-fan')
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitGetLightSensorData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-fan')
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitGetHumidityData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-humidity')
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitGetDHT11SensorData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-temperature')
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitGetInfraredSensorData () {
    return axios.get('https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-infrared')
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitTurnOnAutoBulb (isOn) {
    value = isOn ? "7" : "6";
    return axios.post('https://io.adafruit.com/api/feeds/auto-led/data', 
    {"value": value}, {
        headers: {"x-aio-key": "aio_wpGb16uEqxE9Sr3F9tr7C37aOtqs"}
    })
    .then(response => console.log(response))
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitTurnAutoFan (isOn) {
    value = isOn ? "5" : "4";
    return axios.post('https://io.adafruit.com/api/feeds/auto-fan/data', 
    {"value": value}, {
        headers: {"x-aio-key": "aio_wpGb16uEqxE9Sr3F9tr7C37aOtqs"}
    })
    .then(response => console.log(response))
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitTurnOnBulb (isOn) {
    value = isOn ? "3" : "2";
    return axios.post('https://io.adafruit.com/api/feeds/co3109-led/data', 
    {"value": value}, {
        headers: {"x-aio-key": "aio_wpGb16uEqxE9Sr3F9tr7C37aOtqs"}
    })
    .then(response => console.log(response))
    .catch(error => {
        console.log(error);
    });
}

async function AdafruitTurnFan (isOn) {
    value = isOn ? "1" : "0";
    return axios.post('https://io.adafruit.com/api/feeds/co3109-fan/data', 
    {"value": value}, {
        headers: {"x-aio-key": "aio_wpGb16uEqxE9Sr3F9tr7C37aOtqs"}
    })
    .then(response => console.log(response))
    .catch(error => {
        console.log(error);
    });
}


module.exports = {
    AdafruitGetFanData,
    AdafruitGetBulbData,
    AdafruitGetAutoLedData,
    AdafruitGetAutoFanData,
    AdafruitGetLightSensorData,
    AdafruitGetHumidityData,
    AdafruitGetDHT11SensorData,
    AdafruitGetInfraredSensorData,
    AdafruitTurnOnAutoBulb,
    AdafruitTurnAutoFan,
    AdafruitTurnOnBulb,
    AdafruitTurnFan,

}