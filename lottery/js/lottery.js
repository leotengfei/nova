/**
 * Created by Administrator on 2017/8/25 0025.
 */
//全局的变量：记录所有图片总的加载进度
var progress = 0;
//加载图片
var imgPan = new Image();
imgPan.src = 'img/pan.png';
imgPan.onload = function(){
    console.log('1-圆盘加载完成');
    progress += 75;
    if(progress===100){
        startDraw();
    }
};
var imgPin = new Image();
imgPin.src = 'img/pin.png';
imgPin.onload = function(){
    console.log('2-指针加载完成');
    progress += 25;
    if(progress===100){
        startDraw();
    }
};
//开始绘制静止的圆盘和指针
function startDraw(){
    console.log('开始绘图');
    var cw = imgPan.width;  //圆盘&画布的宽
    var ch = imgPan.height;
    c1.width = cw;
    c1.height = ch;
    var ctx = c1.getContext('2d');
    //先绘制圆盘
    ctx.drawImage(imgPan, 0, 0);
    //再绘制指针
    ctx.drawImage(imgPin, cw/2-imgPin.width/2, ch/2-imgPin.height/2);
}

//刷新获奖列表内容函数
var refresh= function () {
    $.ajax({
        type:'POST',
        url:'data/selectawardstulist.php',
        success: function (data) {
            console.log(data);
            var html='';
            for(var i=0;i<data.length;i++){
                html+=`
                                                <li>${data[i].sname}---${data[i].awardName}---${data[i].stel.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}</li>
                                            `;
            }
            $('#awardstulist').html(html);
        }

    })
};
refresh();
//btn-confirm点击事件
$('#btn-confirm').click(function () {
  var stel=$('#lottery-tel').val();
    var regtel=/^[1][3,4,5,7,8][0-9]{9}$/ig;
    var btel=regtel.test(stel);
    if(!btel){
        $('#tips').html("手机号格式有误！");
    }else{
        $('#tips').html("");
        $.ajax({
            type:'POST',
            data:{stel:stel},
            url:'data/lotterylist.php',
            success: function (data) {
                console.log(data);
                if(data.code==-3){
                    //没有抽奖资格的情况
                    $('#tips').html(data.msg);
                }else if(data.count==0){
                    //已经抽过奖的情况
                    $('#tips').html('只能抽一次哦！');
                }else if(data.count==1){
                    //有抽奖资格的情况
                    $('#mymodal1').css('display','none');

                    bt.innerHTML=`开始抽奖`;
                    bt.disabled=false;
                    $('#bt').on('click',function(){//点击按钮，开始抽奖
                        //******发送ajax请求 验证产生的随机数是否有效(注意小心异步请求出错)
                        $.ajax({
                            type:'POST',
                            url:'data/awardpool.php',
                            data:{stel:stel},
                            success: function (data) {
                                //当所有奖项都被抽完时，显示模态框
                                if(data.firstprize==0&&data.secondprize==0&&data.thirdprize==0&&data.luckprize==0){
                                    $('#mymodal2>div>h4').html('您慢了一步，奖已经被抽完啦！');
                                    $('#mymodal2').css('display','block');
                                    return;
                                }

                                console.log(data);
                                //记录当前已经旋转的时长
                                var duration=0;
                                //记录中奖状态
                                var prize='';
                                //产生随机数函数
                                var RN= function () {
                                    return Math.random()*101;
                                };
                                var rnum=RN();
                                var changePrize= function (stel,awardName) {
                                //    更改awardpool奖池；
                                //    更新awardstulist获奖名单列表
                                    $.ajax({
                                        type:'POST',
                                        url:'data/updateAward.php',
                                        data:{stel:stel,awardName:awardName},
                                        success: function (data) {
                                            console.log(data);
                                        }
                                    });

                                };
                                console.log(rnum);
                                var judge= function () {
                                    if(0<=rnum&&rnum<2){
                                        if(data.firstprize==0){
                                            rnum=RN();
                                            judge();
                                        }else{
                                            console.log('一等奖');
                                        //    一等奖数量减一（ajax）
                                            duration=4040;
                                            prize='一等奖';
                                        }
                                    }else if(2<=rnum&&rnum<5){
                                        if(data.secondprize==0){
                                            rnum=RN();
                                            judge();
                                        }else{
                                            console.log('二等奖');
                                            //    二等奖数量减一
                                            duration=8140;
                                            prize='二等奖';
                                        }
                                    }else if(5<=rnum&&rnum<10){
                                        if(data.thirdprize==0){
                                            rnum=RN();
                                            judge();
                                        }else{
                                            console.log('三等奖');
                                            //    三等奖数量减一
                                            duration=6460;
                                            prize='三等奖';
                                        }
                                    }else if(10<=rnum&&rnum<30){
                                        if(data.luckprize==0){
                                            rnum=RN();
                                            judge();
                                        }else{
                                            console.log('幸运奖');
                                            //    幸运奖数量减一
                                            duration=5820;
                                            prize='幸运奖';
                                        }
                                    }else{
                                        console.log('未中奖');
                                        duration=7500;
                                        prize='未中奖';
                                    }
                                };
                                judge();
                                changePrize(stel,prize);

                                console.log(duration);
                                var last=0;
                                //记录当前已经旋转的角度
                                var deg=0;
                                var org=0;
                                //    减小函数
                                var gosmaller= function () {
                                    org-=5/duration*20;
                                    return org;
                                };
                                var ctx=c1.getContext('2d');
                                //启动定时器，开始旋转：平移/旋转=>绘圆盘=>恢复=>绘制指针
                                var timer=setInterval(function(){
                                    bt.innerHTML=`抽奖中...`;
                                    bt.disabled=true;//***test
                                    //保存画笔当前状态
                                    ctx.save();
                                    ctx.translate(c1.width/2,c1.height/2);
                                    ctx.rotate(deg*Math.PI/180);
                                    ctx.drawImage(imgPan,-c1.width/2,-c1.height/2);
                                    ctx.restore();
                                    ctx.drawImage(imgPin,c1.width/2-imgPin.width/2,c1.height/2-imgPin.height/2);
                                    deg+=5+org;
                                    gosmaller();
                                    // console.log(org);
                                    deg%=360;
                                    last+=20;
                                    if(last>=duration){
                                        //抽奖结束事件
                                        clearInterval(timer);
                                        bt.innerHTML=`抽奖结束`;
                                        //console.log(deg);
                                        if(prize==='未中奖'){
                                            $('#mymodal2>div>h4').html('很遗憾！您未中奖！');
                                            $('#mymodal2').css('display','block');
                                        }else if(prize==='一等奖'){ // ******ajax  2.更新获奖人员名单

                                            $('#mymodal2>div>h4').html('恭喜您，抽中了一等奖！<br>请及时联系微信后台，领取奖品。');
                                            $('#mymodal2').css('display','block');
                                        }else if(prize==='二等奖'){

                                            $('#mymodal2>div>h4').html('恭喜您，抽中了二等奖！<br>请及时联系微信后台，领取奖品。');
                                            $('#mymodal2').css('display','block');
                                        }else if(prize==='三等奖'){

                                            $('#mymodal2>div>h4').html('恭喜您，抽中了三等奖！<br>请及时联系微信后台，领取奖品。');
                                            $('#mymodal2').css('display','block');
                                        }else if(prize==='幸运奖'){

                                            $('#mymodal2>div>h4').html('恭喜您，抽中了幸运奖！<br>请及时联系微信后台，领取奖品。');
                                            $('#mymodal2').css('display','block');
                                        }
                                        refresh();
                                    }
                                },20);
                                bt.disabled=true;
                            }
                        });
                    })
                }
            }
        })
    }
});
