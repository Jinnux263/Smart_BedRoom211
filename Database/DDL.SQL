-- File dinh nghia database

DROP DATABASE IF EXISTS DoAn;
CREATE DATABASE DoAn;
USE DoAn;

/*--------------CREATE TABLE--------------*/

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
	time DATETIME(3),
	temperature FLOAT,
	brightness FLOAT,
	humidity FLOAT,
	isUse BOOLEAN,

	PRIMARY KEY(roomID, time),
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
	time DATETIME(3),
	status BOOLEAN,
	isAuto BOOLEAN,

	PRIMARY KEY(roomID, deviceID, time),
	FOREIGN KEY(roomID, deviceID) REFERENCES Device(roomID, deviceID)
);

/*--------------CREAT PROCEDURE--------------*/

DELIMITER //
create procedure Check_user(p_user_name Char(10), p_pass_word varchar(10))

BEGIN
	if exists (select * from User_s where User_s.Username = p_user_name and User_s.Password = p_pass_word)
    then select 1; 
    else select 0;
    end if;
END; //
DELIMITER ;
call Check_user('admin', 'admin');

-- --------------------------------------

delimiter //
create procedure get_data_of_fan (p_room_id char(10))
begin
	select * from Device_Data
	where deviceID like 'fan%' and (Device_Data.roomID = p_room_id)
    order by Device_Data.time DESC;
end; //
delimiter ;
call get_data_of_fan('room12');

-- --------------------------------------
delimiter //
create procedure get_data_of_bulb (p_room_id char(10))
begin
	-- SQLINES LICENSE FOR EVALUATION USE ONLY
	select * from Device_Data
	where deviceID like 'bulb%' and (Device_Data.roomID = p_room_id)
    order by Device_Data.time DESC;
end; //
delimiter ;
call get_data_of_bulb('room12');

-- --------------------------------------
delimiter //
create procedure get_data_of_room (p_room_id char(10))
begin
	select * from Room_Data
	where Room_Data.roomID = p_room_id
    order by Room_Data.time DESC;
end; //
delimiter ;
call get_data_of_room('room12');

-- --------------------------------------

DELIMITER //
CREATE PROCEDURE Delete_Data_Of_Device()
BEGIN
	DELETE FROM DEVICE_DATA
	WHERE TIMESTAMPDIFF(DAY, Device_Data.time, NOW(3)) >= 7;
END; //
DELIMITER ;

-- ----------------------------------------------

DELIMITER //
CREATE PROCEDURE Delete_Data_Of_Room()
BEGIN
	DELETE FROM Room_Data
	WHERE TIMESTAMPDIFF(DAY, Room_Data.time, NOW(3)) >= 7;
END; //
DELIMITER ;

-- ----------------------------------------------
set global event_scheduler = ON;

create event delete_data_of_devices
	   on schedule every 12 hour
       do call Delete_Data_Of_Device();

create event delete_data_of_rooms
	   on schedule every 12 hour
       do call Delete_Data_Of_Room();