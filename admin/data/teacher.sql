SET NAMES UTF8;
CREATE TABLE teacher(
tid INT PRIMARY KEY AUTO_INCREMENT,
tname VARCHAR(20) NOT NULL DEFAULT '',
job VARCHAR(20) NOT NULL DEFAULT '',
teachtitle VARCHAR(32) NOT NULL DEFAULT '',
photo_sm VARCHAR(100) NOT NULL DEFAULT '',
photo_lg VARCHAR(100) NOT NULL DEFAULT '',
introduction VARCHAR(500) NOT NULL DEFAULT '',
ivideo VARCHAR(300) NOT NULL DEFAULT '',
grade VARCHAR(10) NOT NULL DEFAULT '',
subject VARCHAR(10) NOT NULL DEFAULT '',
v_table VARCHAR(50) NOT NULL DEFAULT ''
);
INSERT INTO teacher VALUES(NULL,'邓亚磊','校长','高考英语专家','m3.jpg','dengyalei.png','无线星空教育校长<br />
西安外国语大学同声传译硕士<br />
中国家庭教育高级指导师<br />
原新东方教育科技集团教学培训师<br />
原西安新东方优能高中师训组长、高中英语项目主管<br />
获新东方教育科技集团骨干教师<br />
西安新东方优能高中教学优秀奖<br />
新东方教育科技集团优秀教师<br />
新东方优能高中优秀教师<br />
新东方教育科技集团20周年功勋教师<br />
数年来累计教授学员超过三万名<br />
连续七年压中高考英语作文，圈内人称"高考英语押题王"','https://v.qq.com/iframe/player.html?vid=n0503eq0uxo&tiny=0&auto=0','高考','英语','');