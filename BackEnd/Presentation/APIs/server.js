const express = require('express');
var colors = require('colors');
// const bulb = require('../../Domain/Usecases/ManageBulb/ManageBulb');
// const fan = require('../../Domain/Usecases/ManageFan/ManageFan');
// const history = require('../../Domain/Usecases/GetDataHistory/GetDataHistory');
// const login = require('../../Domain/Usecases/Login/Login');
// const logout = require('../../Domain/Usecases/Logout/Logout');
// const room = require('../../Domain/Usecases/ViewRoomStatus/ViewRoomStatus');

const bulb = require('../../Domain/Usecases/ManageBulb/Test_ManageBulb');
const fan = require('../../Domain/Usecases/ManageFan/Test_ManageFan');
const history = require('../../Domain/Usecases/GetDataHistory/Test_GetDataHistory');
const login = require('../../Domain/Usecases/Login/Test_Login');
const logout = require('../../Domain/Usecases/Logout/Test_Logout');
const room = require('../../Domain/Usecases/ViewRoomStatus/Test_ViewRoomStatus');

const app = express();
const PORT = 8000;

// DANH SACH CAC API CO THE SU DUNG TU FRONTEND
// Hien thuc cua tung API o trong thu muc Usecase

app.get("/", function (req, res) {
  res.send("API is running...");
});

const fanID = 0;
const bulbID = 1;


// Login
app.post("/login", function (req, res) {
  //Truyen vao thong tin dang nhap
  login.authentication(req, res);
});


// Logout
app.post("/logout", function (req, res) {
  logout.logout(req, res);
});


// Update device
app.post("/fan", function (req, res) {
  fan.updateState(req, res);
});

app.post("/bulb", function (req, res) {
  bulb.updateState(req, res);
});


// Get device information
app.get("/fan", function (req, res) {
  fan.getInformation(req, res);
});

app.get("/bulb", function (req, res) {
  bulb.getInformation(req, res);
});


// Get data history
app.get("/fan/history", function (req, res) {
  history.getHistory(req, res, fanID);
});

app.get("/bulb/history", function (req, res) {
  history.getHistory(req, res, bulbID);
});


// ViewRoomStatus
app.get("/room", function (req, res) {
  room.getInformation(req, res);
});


app.listen(
  PORT,
  console.log(
    `express server is running on port ${PORT}`.cyan.bold
  )
);


// hien thuc worker tren mot thread moi
// CHAY DOAN LENH NAY TREN MOT THREAD MOI
const { Worker } = require('worker_threads');
const AdafruitController = require('../../Domain/System/UpdateDatabase/updateDatabase')

var minutes = 5, the_interval = minutes * 60 * 1000;

AdafruitController.updateDatabase()

setInterval(async function() {
  console.log("Start update Database...");
  handleNewData()
}, the_interval);

function handleNewData (workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__dirname + '/worker.js', { workerData });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`stopped with  ${code} exit code`));
    });
  })
}