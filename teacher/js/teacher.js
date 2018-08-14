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
        $('.loading_container').fadeOut();
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
        for (var i = 0; i < res.course.length; i++) {
            course += `
            <div class="teac_course col-xs-12 col-sm-12 col-md-6">
				<div class="teac_course_img hidden-xs"></div>
					<div class="teac_course_detail">
						<p class="teac_course_detail_title">${res.course[i].grade+res.course[i].subject}
							<span class="course">提高班</span>
							<span class="season">暑假班</span>
						</p>
					    <p class="teac_course_detail_body">${delDate(res.course[i].open_time)}至${delDate(res.course[i].end_time)}
							<br />${res.course[i].gtime}</p>
					</div>
					<div class="teac_course_num"><span class="glyphicon glyphicon-map-marker"></span> <span>${res.course[i].campus}</span></div>
				</div>
            `
        }
        $('#course_container').html(course)
        var video_html='';
        console.log(res.video)
        for(var j=0;j<res.video.length;j++){
            video_html+=`
            <div class="teac_video col-xs-12 col-sm-12 col-md-6">
                <div class="teac_video_img" style="background-image:url(http://wxxk.org/video/img/${res.video[j].imgUrl})">
                    <div class="icon_play"></div>
                </div>
				<div class="teac_video_detail">
					<p class="teac_video_detail_title">${res.video[j].cname}
						<br class="visible-xs">
						<span class="course">提高班</span>
						<span class="season">词汇</span>
					</p>
					<p class="teac_video_detail_body">${res.video[j].intro}
						<br />
						<span class="number">共${res.video[j].total}节</span>
					</p>
				</div>
			    <div class="teac_video_num hidden-xs">观看</div>
			</div>
            `;
        }
        $('#videos_container').html(video_html);
    }

})