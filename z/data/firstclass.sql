SET NAMES UTF8;
USE wxxk2016;
CREATE TABLE firstclass(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	cname VARCHAR(32) NOT NULL DEFAULT '',
	grade VARCHAR(32) NOT NULL DEFAULT '',
	subject VARCHAR(10) NOT NULL DEFAULT '',
	cdate VARCHAR(32) NOT NULL DEFAULT '',
	ctime VARCHAR(32) NOT NULL DEFAULT '',
	clocation VARCHAR(32) NOT NULL DEFAULT ''
);
CREATE TABLE apoint_msg(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	tel VARCHAR(32) NOT NULL DEFAULT '',
	sname VARCHAR(32) NOT NULL DEFAULT '',
	grade VARCHAR(32) NOT NULL DEFAULT '',
	clocation VARCHAR(32) NOT NULL DEFAULT ''
);