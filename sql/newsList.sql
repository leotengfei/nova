SET NAMES UTF8;
CREATE TABLE t_news(
	nid INT PRIMARY KEY AUTO_INCREMENT,
	date DATE NOT NULL DEFAULT 0,
	pub VARCHAR(50) NOT NULL DEFAULT '',
	classify VARCHAR(50) NOT NULL DEFAULT '',
	direction VARCHAR(50) NOT NULL DEFAULT '',
	title VARCHAR(100) NOT NULL DEFAULT '',
	url VARCHAR(300) NOT NULL DEFAULT '',
	imgUrl VARCHAR(100) NOT NULL DEFAULT ''
);