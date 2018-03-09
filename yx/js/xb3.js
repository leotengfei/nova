
    $.extend($.fn,{
        fnTimeCountDown:function(d){
            this.each(function(){
                var $this = $(this);
                var o = {
                    hm: $this.find(".hm"),
                    sec: $this.find(".sec"),
                    mini: $this.find(".mini"),
                    hour: $this.find(".hour"),
                    day: $this.find(".day"),
                    month:$this.find(".month"),
                    year: $this.find(".year")
                };
                var f = {
                    haomiao: function(n){
                        if(n < 10)return "00" + n.toString();
                        if(n < 100)return "0" + n.toString();
                        return n.toString();
                    },
                    zero: function(n){
                        var _n = parseInt(n, 10);//解析字符串,返回整数
                        if(_n > 0){
                            if(_n <= 9){
                                /*_n = "0" + _n*/
                                _n = _n
                            }
                            return String(_n);
                        }else{
                            return "00";
                        }
                    },
                    dv: function(){
                        var _d = $this.data("end") || d;
                        var now = new Date(),
                            endDate = new Date(_d);
                        //现在将来秒差值
                        //alert(future.getTimezoneOffset());
                        var dur = (endDate - now.getTime()) / 1000 , mss = endDate - now.getTime() ,pms = {
                            hm:"000",
                            sec: "00",
                            mini: "00",
                            hour: "00",
                            day: "0",
                            month: "0",
                            year: "0"
                        };
                        if(mss > 0){
                            pms.hm = f.haomiao(mss % 1000);
                            pms.sec = f.zero(dur % 60);
                            pms.mini = Math.floor((dur / 60)) > 0? f.zero(Math.floor((dur / 60)) % 60) : "00";
                            pms.hour = Math.floor((dur / 3600)) > 0? f.zero(Math.floor((dur / 3600)) % 24) : "00";
                            //pms.day = Math.floor((dur / 86400)) > 0? f.zero(Math.floor((dur / 86400)) % 30) : "00";
                            pms.day = Math.floor((dur / 86400)) > 0? f.zero(Math.floor((dur / 86400))) : "0";
                            //pms.day = 51;
                            //月份，以实际平均每月秒数计算
                            //pms.month = Math.floor((dur / 2629744)) > 0? f.zero(Math.floor((dur / 2629744)) % 12) : "00";
                            //年份，按按回归年365天5时48分46秒算
                            //pms.year = Math.floor((dur / 31556926)) > 0? Math.floor((dur / 31556926)) : "0";
                        //}else{
                        //    pms.year=pms.month=pms.day=pms.hour=pms.mini=pms.sec="00";
                        //    pms.hm = "000";
                            //alert('结束了');
                        //    return;
                        }
                        return pms;
                    },
                    ui: function(){
                        if(o.hm){
                            o.hm.html(f.dv().hm);
                        }
                        if(o.sec){
                            o.sec.html(f.dv().sec);
                        }
                        if(o.mini){
                            o.mini.html(f.dv().mini);
                        }
                        if(o.hour){
                            o.hour.html(f.dv().hour);
                        }
                        if(o.day){
                            o.day.html(f.dv().day);
                        }
                        if(o.month){
                            o.month.html(f.dv().month);
                        }
                        if(o.year){
                            o.year.html(f.dv().year);
                        }
                        setTimeout(f.ui, 1);
                    }
                };
                f.ui();
            });
        }
    });

$(document).ready(function(){
    var myAudio = document.getElementsByTagName("audio")[0];
    var myVideo1 = document.getElementsByTagName("video")[0];
    var myVideo2 = document.getElementsByTagName("video")[1];
    var myVideo3 = document.getElementsByTagName("video")[2];
    /*视频窗口关闭及显示开始*/
    $("#guanbi").click(function(){

        $("#zhanduishipin").fadeOut(600);
        myVideo1.pause();
        myVideo2.pause();
        myVideo3.pause();

        $("#pzdsp").animate({right:'0px'});
    });
    $("#pzdsp").click(function(){
        //var bb=document.getElementById("zhanduishipin").clientWidth;
        //bb=-bb-bb;
        $("#pzdsp").animate({right:'-34px'});
        $("#zhanduishipin").fadeIn(600);
        $("#musiccontrol").fadeOut(100);
        myAudio.pause();
        $("#musiccontrol2").fadeIn(600);
    });
    /*视频窗口关闭及显示结束*/




    
    /*音乐按钮关闭及播放开始*/
    $("#musiccontrol").click(function(){
        $("#musiccontrol").fadeOut(100);
        var myAudio = document.getElementsByTagName("audio")[0];
        //alert(myAudio);
        myAudio.pause();
        $("#musiccontrol2").fadeIn(600);

    });

    $("#musiccontrol2").click(function(){
        $("#musiccontrol2").fadeOut(100);
        var myAudio = document.getElementsByTagName("audio")[0];
        myAudio.play();
        $("#musiccontrol").fadeIn(600);
    });
    /*音乐按钮关闭及播放结束*/


    /*视频切换开始*/
    $("#sp1").click(function(){
        $("#spv2,#spv3").css("display","none");
        $("#spv1").fadeIn(200);
        myVideo1.play();
        myVideo2.pause();
        myVideo3.pause();
    });

    $("#sp2").click(function(){
        $("#spv1,#spv3").css("display","none");
        $("#spv2").fadeIn(200);
        myVideo1.pause();
        myVideo2.play();
        myVideo3.pause();
    });

    $("#sp3").click(function(){
        $("#spv1,#spv2").css("display","none");
        $("#spv3").fadeIn(200);
        myVideo1.pause();
        myVideo2.pause();
        myVideo3.play();
    });



    /*视频切换结束*/


});
