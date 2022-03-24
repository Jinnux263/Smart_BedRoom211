const express = require('express');
const bulb = require('../../Domain/Usecases/ManageBulb/ManageBulb');
const fan = require('../../Domain/Usecases/ManageFan/ManageFan');
const history = require('../../Domain/Usecases/GetDataHistory/GetDataHistory');
const login = require('../../Domain/Usecases/Login/Login');
const logout = require('../../Domain/Usecases/Logout/Logout');
const room = require('../../Domain/Usecases/ViewRoomStatus/ViewRoomStatus');

const app = express();
const port = 8000;

// Chi tiet cua tung API duoc hien thuc o trong thu muc Usecase

app.get("/", function (req, res) {
  res.send("API is running...");
});

const fanID = 0;
const bulbID = 1;


// Login
app.post("/login", function (req, res) {
  //Truyen vao thong tin dang nhap
  login.authentication(req.body);
});


// Logout
app.post("/logout", function (req, res) {
  logout.logout();
});


// Update device
app.post("/fan", function (req, res) {
  fan.updateState();
});

app.post("/bulb", function (req, res) {
  bulb.updateState();
});


// Get device information
app.get("/fan", function (req, res) {
  fan.getInformation();
});

app.get("/bulb", function (req, res) {
  bulb.getInformation();
});


// Get data history
app.get("/fan/history", function (req, res) {
  history.getHistory(fanID);
});

app.get("/bulb/history", function (req, res) {
  history.getHistory(bulbID);
});


// ViewRoomStatus
app.get("/room", function (req, res) {
  room.getInformation();
});


app.listen(
  port,
  console.log(
    `express server is running on port ${port}`
  )
);

