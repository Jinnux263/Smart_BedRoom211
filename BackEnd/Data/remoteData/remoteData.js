const axios = require('axios');

function AdafruitGetFanData () {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error);
    });
}

function AdafruitGetBulbData () {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error);
    });
}

function AdafruitGetRoomData () {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error);
    });
}
function AdafruitGUpdateFanData () {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error);
    });
}

function AdafruitUpdateBulbData () {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error);
    });
}

function AdafruitUpdateRoomData () {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
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
    AdafruitGetRoomData,
    AdafruitGUpdateFanData,
    AdafruitUpdateBulbData,
    AdafruitUpdateRoomData,
}