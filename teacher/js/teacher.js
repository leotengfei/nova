// 获取路径中的tid和subject
console.log(location.search.split('='))
var tidStr = location.search.split('=')[1]
var subject = decodeURI(location.search.split('=')[2])
// 科目
var tid = tidStr.split('&')[0]
// 老师id
console.log(tid)
console.log(subject)
$.ajax({
    type: 'POST',
    url: 'https://mokey.club/wxxkTeacher/teacherCourse',
    data: {
        tid: tid,
        subject: subject
    },
    success: function (res) {
        console.log(res)
        // 教师头像
        $('#teac_pic').css('background', 'url(' + res.bimg + ')');
        // 教师文字介绍
        $('#teac_intro').html(
            `<p>
                <strong>${res.tname}</strong>${res.dept+res.subject}
            </p>
            <p>${res.introduction}</p>`
        );
        // 教师信息
        var teacher_info=`
                        <p class="fleft">
                            <span id="teacher_hot">关注度：${res.hot}</span>
                            <img src="images/heart2.png">
                        </p>
                        <p class="fclear"></p>
                        <p class="fleft">
                            <span>教师星级：</span>`
                        var star='';
                            for(var a=0;a<res.star;a++){
                                star+="<img src='images/star_d.png'>"
                            }
                            for(var b=0;b<6-res.star;b++){
                                star+="<img src='images/star2.png'>"
                            }
        teacher_info+=star;    
        teacher_info+=`
                        </p>
                        <p class="fclear"></p>
                        <p>教师教龄：${res.year}年</p>
                        <p>授课时长：${res.teach_num}小时</p>
                        <p>教授学生：${res.student_num}人次</p>
                        `
        $('#teac_level').html(teacher_info)
        var course = '';
        var arr = ['course', 'season', 'course'];
        if(res.course.length===0){
            course="<p class='tip'>暂时没有课程...</p>"
        }else{
        for (var i = 0; i < res.course.length; i++) {
            course += `
            <div class="teac_course col-xs-12 col-sm-12 col-md-6">
				<div class="teac_course_img hidden-xs"></div>
					<div class="teac_course_detail">
                        <p class="teac_course_detail_title">${res.course[i].grade+res.course[i].subject}`;

            var tagsArr = res.course[i].class_tag;
            // console.log(tagsArr);
            var tagsHtml = "";
            for (var x = 0; x < tagsArr.length; x++) {
                tagsHtml += `<span class="${arr[x]}">${tagsArr[x]}</span>`
            }
            course += tagsHtml;

            course += `
						</p>
					    <p class="teac_course_detail_body">${delDate(res.course[i].open_time)}至${delDate(res.course[i].end_time)}
							<br />${res.course[i].gtime}</p>
					</div>
					<a href="${res.course[i].full_name}" class="teac_course_num"><span class="glyphicon glyphicon-map-marker"></span> <span>${res.course[i].campus}</span></a>
				</div>
            `
        }
        }
        $('#course_container').html(course)
        var video_html = '';
        console.log(res.video)
        if(res.video.length===0){
            video_html="<p class='tip'>暂时没有视频...</p>"
        }else{
            for (var j = 0; j < res.video.length; j++) {
                video_html += `
                <div class="teac_video col-xs-12 col-sm-12 col-md-6">
                    <a href="${res.video[j].cid}">
                    <div class="teac_video_img" style="background-image:url(http://wxxk.org/video/img/${res.video[j].imgUrl})">
                        <div class="icon_play"></div>
                    </div>
                    <div class="teac_video_detail">
                        <p class="teac_video_detail_title">${res.video[j].cname}
                            <br class="visible-xs">`
                var vtagsArr = res.video[j].tag
                var vtagsHtml = '';
                for (var y = 0; y < vtagsArr.length; y++) {
                    vtagsHtml += `<span class="${arr[y]}">${vtagsArr[y]}</span>`
                }
                video_html += vtagsHtml;
                video_html += `
                        </p>
                        <p class="teac_video_detail_body">${res.video[j].intro}
                            <br />
                            <span class="number">共${res.video[j].total}节</span>
                        </p>
                    </div>
                    <div class="teac_video_num hidden-xs">观看</div>
                    </a>
                </div>
                `;
            }
        }
        $('#videos_container').html(video_html);
    }

})

// 百度地图API功能
var searchMap = function (loca, address, tel, intro) {
    var arr = loca.split(',');
    var map = new BMap.Map('allmap');
    var poi = new BMap.Point(arr[0], arr[1]);
    map.centerAndZoom(poi, 16);
    map.enableScrollWheelZoom();

    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
        '<img src="../images/m-logo.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
        '地址：' + address + '<br/>电话：' + tel + '<br/>简介：' + intro +
        '</div>';
    //创建检索信息窗口对象
    var searchInfoWindow = null;
    searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
        title: "无线星空", //标题
        width: 290, //宽度
        height: 105, //高度
        panel: "panel", //检索结果面板
        enableAutoPan: true, //自动平移
        searchTypes: [
            BMAPLIB_TAB_SEARCH, //周边检索
            BMAPLIB_TAB_TO_HERE, //到这里去
            BMAPLIB_TAB_FROM_HERE //从这里出发
        ]
    });
    var marker = new BMap.Marker(poi); //创建marker对象
    marker.enableDragging(); //marker可拖拽
    searchInfoWindow.open(marker);
    marker.addEventListener("click", function (e) {
        searchInfoWindow.open(marker);
    });
    map.addOverlay(marker); //在地图中添加marker
};

// 地址点击事件
$('#course_container').on('click', 'a.teac_course_num', function (e) {
    e.preventDefault();
    $('#mapModal').modal('show')
    console.log($(this).children().last().html())
    console.log($(this).attr('href'))
    var fullName = $(this).attr('href')
    $.ajax({
        type: 'POST',
        url: 'https://mokey.club/wxxkTeacher/courseCampus',
        data: {
            fullName: fullName
        },
        success: function (res) {
            console.log(res)
            // 更新地图位置
            searchMap(res.loca, res.address, res.tel, res.intro);
        }
    })
})


var video = document.getElementById('my-video');
var source = document.getElementById('videoMP4');
$('#videoModal').modal({backdrop: 'static', keyboard: false,show:false}); 
// 视频点击事件
$('#videos_container').on('click','div>a',function(e){
    e.preventDefault();
    $('#videoModal').modal('show')
    console.log($(this).attr('href'))
    var cid=$(this).attr('href');
    $.ajax({
        type:'POST',
        url:'https://mokey.club/wxxkTeacher/courseVideo',
        data:{
            cid:cid
        },
        success:function(res){
            console.log(res.data)
            video.pause()
            source.setAttribute('src', res.data[0].videoUrl);
            video.load();
            video.play();
            var html=`<a href="${res.data[0].videoUrl}" class="list-group-item active">${res.data[0].episode+"."}${res.data[0].description}</a>
            `;
            for(var i=1;i<res.data.length;i++){
                html+=`
                <a href="${res.data[i].videoUrl}" class="list-group-item">${res.data[i].episode+"."}${res.data[i].description}</a>
                `;
            }
            $('#videoPlayList>div.list-group').html(html);
        }
    })
})

// 关闭视频按钮
$('#close_video').click(function(){
    video.pause();
})

// 打开视频播放列表按钮事件
$('#videoPlayList>div.play_btn').click(function(){
    if($(this).hasClass('btnOpen')){
        // 如果菜单已经打开
        $('#videoPlayList').css('transform','translateX(0)');
        $(this).removeClass('btnOpen');
    }else{
        // 如果菜单已经关闭
        $('#videoPlayList').css('transform','translateX(-100%)');
        $(this).addClass('btnOpen');
    }
})

// 集数选项点击事件
$('#videoPlayList>div.list-group').on('click','a',function(e){
    e.preventDefault();
    console.log($(this).attr('href'))
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    var videoUrl=$(this).attr('href');
    video.pause()
    source.setAttribute('src', videoUrl);
    video.load();
    video.play();
})


// 点赞js

$('#player-praises>a.praises').click(function(e){
    e.preventDefault();
    // console.log(1)
    $.ajax({
        url:'https://mokey.club/wxxkTeacher/teacherLike',
        type:'POST',
        data:{
            uid:1,
            tid:tid
        },
        success:function(res){
            console.log(res)
            if(res.msg=='ok'){
                // 点赞成功，更新热度
                $('#teacher_hot').html("关注度："+res.num)
            }else{
                alert('该老师点赞量已经达到上限，明天再来哦！')
            }
        }
    })
})


// 兼容iphone  hover事件
$('#teac_pic').mouseover(function(){
    $('#teac_pic').addClass('cube_active')
})
$('#teac_pic').mouseout(function(){
    $('#teac_pic').removeClass('cube_active')
})

'use strict';
(function($) {

        // 最大心
    var heartMax = 32,
        // 最小心
        heartMin = 26,
        // 心的最多数量
        heartMaxNum = 80,
        // 心颜色数组
        colors = ["FF5D31", "FF7043", "FF9800", "F9A825", "F57F17", "FFCA28"],
        // 心svg图形
        svgString = '<svg viewBox="-1 -1 27 27"><path class="svgpath" style="fill:$fill$;stroke: #FFF; stroke-width: 1px;" d="M11.29,2C7-2.4,0,1,0,7.09c0,4.4,4.06,7.53,7.1,9.9,2.11,1.63,3.21,2.41,4,3a1.72,1.72,0,0,0,2.12,0c0.79-.64,1.88-1.44,4-3,3.09-2.32,7.1-5.55,7.1-9.94,0-6-7-9.45-11.29-5.07A1.15,1.15,0,0,1,11.29,2Z"/></svg>',

        /**
         * [心样式及动画构造]
         * @param  {[object]} element [装心的容器]
         * @return {}
         */
        heartTemplate = function(element) {
            // 容器宽度
            this.width = element.width(), 
            // 容器高度
            this.height = element.height();
            // 从[svgString]中取得图形随机色值
            var _color = colors[Math.floor(Math.random() * colors.length)],
                // 添加进svgString并取得dom
                _svgDom = $(svgString.replace("$fill$", "#" + _color));

            // 赋值svgDom
            this.$el = _svgDom, 
            // 初始X坐标（容器宽度的一半减去10）
            this.startX = this.width / 2 - 10, 
            // 初始Y坐标
            this.y = 0, 
            
            this.pos = Math.random() * Math.PI, 
            this.hz = Math.random() * 20 + 10, 
            this.zf = Math.random() * 15 + 10,
            // 随机初始透明度值
            this.opacityStart = Math.random() * 10 + 10,
            
            // 设置svg样式
            this.setStyle(), 

            // 插入容器
            element.append(_svgDom), 

            // 运行动画
            this.run()
        };

        /**
         * [设置样式]
         */
    heartTemplate.prototype.setStyle = function() {

        var _left = this.startX + Math.sin(this.pos + this.y / this.hz) * this.zf,
            _opactiy = 1 - Math.max((this.y - this.opacityStart) / (this.height - this.opacityStart), 0),
            _size = Math.min(this.y * 2 / this.height * (heartMax - heartMin) + heartMin, heartMax);

        this.$el.css({
            left: _left,
            bottom: this.y,
            opacity: _opactiy
        }).width(_size).height(_size)
    }, 
    /**
     * [动画函数]
     * @return {}
     */
    heartTemplate.prototype.run = function() {
        var that = this,
            delay = Math.random() * 20 + 10,
            now = $.now(),
            timer = setInterval(function() {
                var curNow = $.now();
                that.y += Math.round((curNow - now) / delay), 
                now = curNow, 

                // 设置样式
                that.setStyle(), 

                // 如果y值大于等于容器高度则移除svgDom并且清除定时器
                that.y >= that.height && (that.$el.remove(), clearTimeout(timer))
            }, delay)
    };

    /**
     * [点赞]
     * @return {}
     */
    var praises = function() {
        this.$root = $("#player-praises"), 
        this.$inner = this.$root.find(".bubble");
        var broswer = 0;
        try {
            broswer = navigator.userAgent.match(/MSIE (\d+)/i)[1]
        } catch (n) {
            broswer = 0
        }
        broswer == 0 ? (this.$root.show(), this.initEvent()) : this.$root.hide()
    };

    // 插入Dom
    praises.prototype.add = function(num) {
        num = num || 1;
        if (this.$inner.find("svg").length + num > heartMaxNum) return;
        for (var i = num; i > 0; i--)
            new heartTemplate(this.$inner)
    },

    // 事件绑定
    praises.prototype.initEvent = function() {
        var that = this;

        this.$root.find(".praises").on("click", function(event) {
            event.preventDefault(), 
            that.add()
        })

        this.$root.on("praise:receive", function(e) {
            that.add(e.num)
        })
    }

    // 执行点赞方法
    new praises();

})(jQuery)