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
	time DATETIME,
	temperature Float(10),
	brightness Float(10),
	humidity Float(10),
	isUse BIT,

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
	time DATETIME,
	status BIT,
	isAuto BIT,

	PRIMARY KEY(roomID, deviceID, time),
	FOREIGN KEY(roomID, deviceID) REFERENCES Device(roomID, deviceID)
);

/*--------------CREAT PROCEDURE--------------*/

GO
create proc Check_user
@user_name Char(10), @pass_word varchar(10)
as
begin
	SELECT CASE WHEN EXISTS (
    SELECT *
    FROM [User_s]
    WHERE Username = @user_name and Password = @pass_word
)
THEN CAST(1 AS BIT)
ELSE CAST(0 AS BIT) END
end

-- exec dbo.Check_user @user_name = 'user1', @pass_word = 'password01'

----------------------------------------------------

GO
create proc get_data_of_fan
@room_id char(10)
as
begin
	select * from Device_Data
	where deviceID like 'fan%' and (Device_Data.roomID = @room_id)
end

-- exec dbo.get_data_of_fan @room_id = 'room12'

----------------------------------------------------

GO
create proc get_data_of_bulb
@room_id char(10)
as
begin
	select * from Device_Data
	where deviceID like 'bulb%' and (Device_Data.roomID = @room_id)
end

-- exec dbo.get_data_of_bulb @room_id = 'room11'

-----------------------------------------------------

GO
create proc get_data_of_room
@room_id char(10)
as
begin
	select * from Room_Data
	where Room_Data.roomID = @room_id
end

-- exec get_data_of_room @room_id = 'room11'

-----------------------------------------------------

GO
CREATE PROCEDURE Delete_Data_Of_Device
AS
BEGIN
	WHILE 1=1
	BEGIN
		WAITFOR TIME '23:00'
		BEGIN
			DELETE FROM DEVICE_DATA
			WHERE DATEDIFF(DAY, Device_Data.time, GETDATE()) >= 7
		END
	END
END

-- exec Delete_Data_Of_Device

-----------------------------------------------------

GO
CREATE PROCEDURE Delete_Data_Of_Room
AS
BEGIN
	WHILE 1=1
	BEGIN
		WAITFOR TIME '23:00'
		BEGIN
			DELETE FROM Room_Data
			WHERE DATEDIFF(DAY, Room_Data.time, GETDATE()) >= 7
		END
	END
END

-- exec Delete_Data_Of_Room