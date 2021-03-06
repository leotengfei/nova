SET NAMES UTF8;
CREATE TABLE question_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	utel VARCHAR(30) NOT NULL DEFAULT '',
	uname VARCHAR(20) NOT NULL DEFAULT ''
);
CREATE TABLE question_leader(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	uid INT NOT NULL DEFAULT 0,
	leaders VARCHAR(200) NOT NULL DEFAULT ''
);
CREATE TABLE question_score(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	uid INT NOT NULL DEFAULT 0,
	leader VARCHAR(200) NOT NULL DEFAULT '',
	q1 INT NOT NULL DEFAULT 0,
	q2 INT NOT NULL DEFAULT 0,
	q3 INT NOT NULL DEFAULT 0,
	q4 INT NOT NULL DEFAULT 0,
	q5 INT NOT NULL DEFAULT 0,
	q6 INT NOT NULL DEFAULT 0,
	q7 INT NOT NULL DEFAULT 0,
	q8 INT NOT NULL DEFAULT 0,
	q9 INT NOT NULL DEFAULT 0,
	q10 INT NOT NULL DEFAULT 0,
	q11 INT NOT NULL DEFAULT 0,
	q12 INT NOT NULL DEFAULT 0,
	q13 INT NOT NULL DEFAULT 0,
	q14 INT NOT NULL DEFAULT 0,
	total INT NOT NULL DEFAULT 0
);
CREATE TABLE question_quest(
	qid INT PRIMARY KEY AUTO_INCREMENT,
	question VARCHAR(300) NOT NULL DEFAULT ''
);