USE classtab;
CREATE TABLE xiaoxue(
	gid INT PRIMARY KEY AUTO_INCREMENT,
	classnum VARCHAR(32) NOT NULL DEFAULT '',
	classname VARCHAR(32) NOT NULL DEFAULT '',
	xbegin VARCHAR(32) NOT NULL DEFAULT '',
	xend VARCHAR(32) NOT NULL DEFAULT '',
	xtime VARCHAR(50) NOT NULL DEFAULT '',
	location VARCHAR(32) NOT NULL DEFAULT '',
	grade VARCHAR(32) NOT NULL DEFAULT '',
	money VARCHAR(32) NOT NULL DEFAULT ''
)