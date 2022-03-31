USE DoAn;

INSERT INTO User_s VALUES ('admin', 'admin');
INSERT INTO User_s VALUES ('user1', 'password01');
INSERT INTO User_s VALUES ('user2', 'password02');

INSERT INTO Room VALUES ('room12', 'bedroom');

INSERT INTO Room_Data VALUES ('room12', '2015-07-21 12:12', 33, 400, 79, 1);

INSERT INTO Device VALUES ('room12', 'fan02', 'fan');
INSERT INTO Device VALUES ('room12', 'bulb02', 'bulb');

INSERT INTO DEVICE_DATA VALUES ('room12', 'fan02', '2015-07-21', 0, 1);
INSERT INTO DEVICE_DATA VALUES ('room12', 'bulb02', '2015-07-21', 0, 1);
