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
        $('#teac_level').html(
            `
            <p class="fleft">
				<span>关注度：${res.hot}</span>
				<img src="images/heart2.png">
			</p>
			<p class="fclear"></p>
			<p class="fleft">
				<span>教师星级：</span>
				<img src="images/star2.png">
				<img src="images/star2.png">
				<img src="images/star2.png">
				<img src="images/star2.png">
				<img src="images/star2.png">
			</p>
			<p class="fclear"></p>
			<p>教师教龄：7年</p>
			<p>授课时长：33,882小时</p>
			<p>教授学生：7,233人次</p>
            `
        )
        var course = '';
        var arr = ['course', 'season', 'course'];
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
        $('#course_container').html(course)
        var video_html = '';
        console.log(res.video)
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