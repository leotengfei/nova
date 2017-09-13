SET NAMES UTF8;
CREATE TABLE teacher(
tid INT PRIMARY KEY AUTO_INCREMENT,
tname VARCHAR(32) NOT NULL DEFAULT '',
grade VARCHAR(10) NOT NULL DEFAULT '',
subject VARCHAR(10) NOT NULL DEFAULT '',
photo_sm VARCHAR(100) NOT NULL DEFAULT '',
photo_lg VARCHAR(100) NOT NULL DEFAULT '',
introduction VARCHAR(500) NOT NULL DEFAULT ''

);
INSERT INTO teacher VALUES(NULL,'邓亚磊','高考','英语','m3.jpg','dengyalei.png','无线星空教育校长。西安外国语大学同声传译硕士；中国家庭教育高级指导师；原新东方教育科技集团教学培训师；原西安新东方优能高中师训组长、高中英语项目主管。2009-2010年获新东方教育科技集团骨干教师；2011年西安新东方优能高中教学优秀奖；2012年新东方教育科技集团优秀教师；2013年新东方优能高中优秀教师；2013-2014年新东方教育科技集团20周年功勋教师。2014年西安新东方优能高中最具魅力男神奖。在新东方教授学员累计26427名；连续五年压中高考英语作文，圈内人称"高考英语押题王"。');