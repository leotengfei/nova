SET NAMES UTF8;
CREATE TABLE apoint_msg(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	tel VARCHAR(32) NOT NULL DEFAULT '',
	sname VARCHAR(32) NOT NULL DEFAULT '',
	seat INT NOT NULL DEFAULT 0,
	isVIP VARCHAR(32) NOT NULL DEFAULT ''
);
CREATE TABLE apoint_vip(
	vid INT PRIMARY KEY AUTO_INCREMENT,
	vtel VARCHAR(32) NOT NULL DEFAULT '',
	vname VARCHAR(32) NOT NULL DEFAULT ''
)