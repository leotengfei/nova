CREATE TABLE user_info(
  uid INT PRIMARY KEY AUTO_INCREMENT,-- 用户编号
  utel VARCHAR(32) NOT NULL DEFAULT '',-- 用户电话
  upwd VARCHAR(400) NOT NULL DEFAULT ''-- 用户密码
);
CREATE TABLE trade_history(
    WIDout_trade_no BIGINT PRIMARY KEY,-- 订单编号
    WIDsubject VARCHAR(200) NOT NULL DEFAULT '',-- 订单名称（课程名称）
    WIDtotal_amount INT NOT NULL DEFAULT 0,-- 付款金额（单位：分）
    WIDbody VARCHAR(100) NOT NULL DEFAULT '',-- 商品描述
    trade_status VARCHAR(50) NOT NULL DEFAULT ''-- 交易状态
);
CREATE TABLE shoppingCart(
    WIDout_trade_no BIGINT PRIMARY KEY,-- 订单编号
    uid INT NOT NULL DEFAULT 0,-- 用户id
    cid INT NOT NULL DEFAULT 0,-- 课程编号
    WIDsubject VARCHAR(200) NOT NULL DEFAULT '',-- 订单名称（课程名称）
    WIDtotal_amount INT NOT NULL DEFAULT 0,-- 付款金额（单位：分）
    WIDbody VARCHAR(100) NOT NULL DEFAULT ''-- 商品描述
);
CREATE TABLE class_info(
    cid INT PRIMARY KEY AUTO_INCREMENT,-- 课程编号
    total INT NOT NULL DEFAULT 0,-- 课时
    cname VARCHAR(200) NOT NULL DEFAULT '',-- 课程名称
    grade VARCHAR(10) NOT NULL DEFAULT '',-- 年级
    project VARCHAR(10) NOT NULL DEFAULT '',-- 学科
    teacher VARCHAR(100) NOT NULL DEFAULT '',-- 主讲教师
    cPrice INT NOT NULL DEFAULT 0,-- 课程价格（单位：分）
    imgUrl VARCHAR(200) NOT NULL DEFAULT '',-- 图片路径
    is_free VARCHAR(10) NOT NULL DEFAULT '',-- 是否免费
    tag VARCHAR(100) NOT NULL DEFAULT '',-- 视频标签分类
    intro VARCHAR(100) NOT NULL DEFAULT ''-- 视频简介（总课程简介）
);
CREATE TABLE class_detail(
    cdid INT PRIMARY KEY AUTO_INCREMENT,-- 课程细节编号
    cid INT NOT NULL DEFAULT 0,-- 课程编号
    episode INT NOT NULL DEFAULT 0,-- 课程第几集
    description VARCHAR(100) NOT NULL DEFAULT '',-- 课程描述
    videoUrl VARCHAR(200) NOT NULL DEFAULT ''-- 视频路径
);
