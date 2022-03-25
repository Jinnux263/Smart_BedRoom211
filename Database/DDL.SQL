--  File dinh nghia Database
DROP DATABASE IF EXISTS DoAn;
CREATE DATABASE DoAn;
USE DoAn;

/*--------------CREAT TABLE--------------*/

CREATE TABLE User_s
(
	Username CHAR(10),
	Password VARCHAR(10),
	
	PRIMARY KEY(Username)
);

CREATE TABLE Room
(
	roomID VARCHAR(10),
	name CHAR(10),
	
	PRIMARY KEY(roomID)
);

CREATE TABLE Room_Data
(
	roomID VARCHAR(10),
	time DATE,
	temperature Float(10),
	brightness Float(10),
	humidity Float(10),
	isUse BIT,

	PRIMARY KEY(roomID),
	FOREIGN KEY(roomID) REFERENCES Room(roomID)
);

CREATE TABLE Device
(
	roomID VARCHAR(10),
	deviceID VARCHAR(10),
	name CHAR(10),
	
	PRIMARY KEY(roomID, deviceID),
	FOREIGN KEY(roomID) REFERENCES Room(roomID)
);

CREATE TABLE Device_Data
(
	roomID VARCHAR(10),
	deviceID VARCHAR(10),
	time DATE,
	status BIT,
	isAuto BIT,

	PRIMARY KEY(roomID, deviceID),
	FOREIGN KEY(roomID, deviceID) REFERENCES Device(roomID, deviceID)
);