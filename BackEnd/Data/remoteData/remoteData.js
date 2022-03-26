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



module.exports = {
    AdafruitGetFanData,
    AdafruitGetBulbData,
    AdafruitGetAutoLedData,
    AdafruitGetAutoFanData,
    AdafruitGetLightSensorData,
    AdafruitGetHumidityData,
    AdafruitGetDHT11SensorData,
    AdafruitGetInfraredSensorData,
    
}