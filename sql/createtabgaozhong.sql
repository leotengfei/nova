SET NAMES UTF8;
DROP DATABASE IF EXISTS classtab;
CREATE DATABASE classtab CHARSET=UTF8;
USE classtab;
CREATE TABLE gaozhong(
	gid INT PRIMARY KEY AUTO_INCREMENT,
	classname VARCHAR(32) NOT NULL DEFAULT '',
	grade VARCHAR(32) NOT NULL DEFAULT '',
	project VARCHAR(32) NOT NULL DEFAULT '',
	gbegin DATE NOT NULL DEFAULT 0,
	gend DATE NOT NULL DEFAULT 0,
	gtime VARCHAR(50) NOT NULL DEFAULT '',
	location VARCHAR(32) NOT NULL DEFAULT '',
	teacher VARCHAR(32) NOT NULL DEFAULT '',
	money VARCHAR(32) NOT NULL DEFAULT ''
)