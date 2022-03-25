-- File them du lieu cho database
USE DoAn

/*--------------INSERT DATA--------------

--------------DATA OF USER-------------*/

INSERT INTO User_ VALUES ('user1', 'password01');
INSERT INTO User_ VALUES ('user2', 'password02');

/*--------------DATA OF ROOM-------------*/

INSERT INTO Room VALUES ('room11', 'livingroom');
INSERT INTO Room VALUES ('room12', 'bedroom');
INSERT INTO Room VALUES ('room21', 'livingroom');
INSERT INTO Room VALUES ('room22', 'bedroom');

/*--------------DATA OF ROOM_DATA-------------*/

INSERT INTO Room_Data VALUES ('room11', 2022-03-25, 33, 400, 1);
INSERT INTO Room_Data VALUES ('room12', 2022-03-25, 33, 400, 1);
INSERT INTO Room_Data VALUES ('room21', 2022-03-25, 33, 400, 1);
INSERT INTO Room_Data VALUES ('room22', 2022-03-25, 33, 400, 1);

/*--------------DATA OF DEVICE-------------*/

INSERT INTO Device VALUES ('room11', 'fan01', 'fan');
INSERT INTO Device VALUES ('room11', 'light01', 'light');
INSERT INTO Device VALUES ('room12', 'fan02', 'fan');
INSERT INTO Device VALUES ('room12', 'light02', 'light');
INSERT INTO Device VALUES ('room21', 'fan01', 'fan');
INSERT INTO Device VALUES ('room21', 'light01', 'light');
INSERT INTO Device VALUES ('room22', 'fan02', 'fan');
INSERT INTO Device VALUES ('room22', 'light02', 'light');

/*--------------DATA OF DEVICE_DATA-------------*/

INSERT INTO DEVICE_DATA VALUES ('room11', 'fan01', 2022-03-25, 0, 1);
INSERT INTO DEVICE_DATA VALUES ('room11', 'light01', 2022-03-25, 0, 1);
INSERT INTO DEVICE_DATA VALUES ('room12', 'fan02', 2022-03-25, 0, 1);
INSERT INTO DEVICE_DATA VALUES ('room12', 'light02', 2022-03-25, 0, 1);
INSERT INTO DEVICE_DATA VALUES ('room21', 'fan01', 2022-03-25, 0, 1);
INSERT INTO DEVICE_DATA VALUES ('room21', 'light01', 2022-03-25, 0, 1);
INSERT INTO DEVICE_DATA VALUES ('room22', 'fan01', 2022-03-25, 0, 1);
INSERT INTO DEVICE_DATA VALUES ('room22', 'light01', 2022-03-25, 0, 1);
