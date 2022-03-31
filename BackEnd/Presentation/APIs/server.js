const express = require('express');
var colors = require('colors');
const bulb = require('../../Domain/Usecases/ManageBulb/ManageBulb');
const fan = require('../../Domain/Usecases/ManageFan/ManageFan');
const history = require('../../Domain/Usecases/GetDataHistory/GetDataHistory');
const login = require('../../Domain/Usecases/Login/Login');
const logout = require('../../Domain/Usecases/Logout/Logout');
const room = require('../../Domain/Usecases/ViewRoomStatus/ViewRoomStatus');
var bodyParser = require('body-parser')


// const bulb = require('../../Domain/Usecases/ManageBulb/Test_ManageBulb');
// const fan = require('../../Domain/Usecases/ManageFan/Test_ManageFan');
// const history = require('../../Domain/Usecases/GetDataHistory/Test_GetDataHistory');
// const login = require('../../Domain/Usecases/Login/Test_Login');
// const logout = require('../../Domain/Usecases/Logout/Test_Logout');
// const room = require('../../Domain/Usecases/ViewRoomStatus/Test_ViewRoomStatus');

const app = express();
const PORT = 8000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// DANH SACH CAC API CO THE SU DUNG TU FRONTEND
// Hien thuc cua tung API o trong thu muc Usecase
// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.get("/", function (req, res) {
  res.status(200).send("API is running...");
});

// const fanID = 'fan02'
// const bulbID = 'light02'
const fanID = 'fan02'
const bulbID = 'light02'
const roomID = 'room12'


// Login, luon tra ve true
app.get("/login", function (req, res) {
  //Truyen vao thong tin dang nhap, usẻname voi password
  login.authentication(req, res);
});


// Logout, hien khong lam gi ca
app.post("/logout", function (req, res) {
  logout.logout(req, res);
});


// Update device
// GUI TOI MỘT OBJECT CHỨA TOÀN BỘ THÔNG TIN CỦA FAN, dung khi co thao tac doi voi den va quat
// obj = {
//   isOn : false,
//   isAuto : false,
// }
// --> ok
app.post("/fan", function (req, res) {
  fan.updateState(req, res);
});

// --> ok
app.post("/bulb", function (req, res) {
  bulb.updateState(req, res);
});



// Get device information --> ok
app.get("/fan", function (req, res) {
  fan.getInformation(req, res);
});
// --> ok
app.get("/bulb", function (req, res) {
  bulb.getInformation(req, res);
});

// Lay thong tin ca phong, gom anh sang, nhiet do va do am, vi the neu muon hien thi man hinh thong tin ca phong can ket hop thong tin den va quat nua --> ok
app.get("/room", function (req, res) {
  room.getInformation(req, res);
});



// Get data history
// Lay lich su thiet bi tai man hinh lay full, dang doi Database cung cap cac ham, hien chua chay duoc
app.get("/fan/history", function (req, res) {
  history.getHistory(req, res, fanID);
});

app.get("/bulb/history", function (req, res) {
  history.getHistory(req, res, bulbID);
});

app.get("/room/history", function (req, res) {
  history.getHistory(req, res, roomID);
});



app.listen(
  PORT,
  console.log(
    `express server is running on port ${PORT}`.cyan.bold
  )
);



const { Worker } = require('worker_threads');
const AdafruitController = require('../../Domain/System/UpdateDatabase/updateDatabase')
const systemInit = require('../../Domain/System/InitData/InitData')

var minutes = 5, the_interval = minutes * 60 * 1000;

AdafruitController.updateDatabase()
// systemInit()

setInterval(async function() {
  console.log("Start update Database...");
  AdafruitController.updateDatabase()
}, the_interval);

// function handleNewData (workerData) {
//   return new Promise((resolve, reject) => {
//     const worker = new Worker(__dirname + '/worker.js', { workerData });

//     worker.on('message', resolve);
//     worker.on('error', reject);
//     worker.on('exit', (code) => {
//       if (code !== 0)
//         reject(new Error(`stopped with  ${code} exit code`));
//     });
//   })
// }