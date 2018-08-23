var pagenumber = 1; //当前页
var pagecount = 1; //总页码数
var sort_way = 'hot'; //默认按照热度排序


var refresh = function (sort) {
    // 排序方式，
    $('.loading_container').show();
    $.ajax({
        type: 'POST',
        url: 'https://mokey.club/wxxkTeacher/teacherDept',
        data: {
            dept: '高中',
            list: pagenumber,
            listRow: 12,
            sort: sort
        },
        success: function (res) {
            $('.loading_container').fadeOut();
            pagecount = Math.ceil(res.num / 12)
            $("#pager").pager({
                pagenumber: pagenumber,
                pagecount: pagecount,
                buttonClickCallback: PageClick
            });
            var arr = res.data;
            var str = "";
            var idx = 0;
            for (var i = 0; i < arr.length; i++) {
                if(idx>7){
                    idx=0
                }
                str += `
        <div class="col-xs-6 col-sm-3">
        <a class="team__item set_9_btn-corner" href="teacher.html?tid=${arr[i].id}&subject=${arr[i].subject}">
            <span class="line1 bord" style="background-color:${colorArr[idx]}"></span>
            <span class="line2 bord" style="background-color:${colorArr[idx]}"></span>
            <span class="line3 bord" style="background-color:${colorArr[idx]}"></span>
            <span class="line4 bord" style="background-color:${colorArr[idx]}"></span>
            <div class="team-item__img" style="background-color:${colorArr[idx]}">
                <img data-original="${arr[i].simg}" width="200" class="lazy img-responsive" alt="${arr[i].tname+arr[i].dept+arr[i].subject}">
            </div>
            <h4>${arr[i].tname}
                <span>${arr[i].dept}${arr[i].subject}</span>
            </h4>
            <div class="row">
                <div class="col-md-12">
                    <div class="team-item__contact">
                        <ul>
                            <li>
                                <img src="images/xin.png">37526</li>
                            <li>
                                <img src="images/eye.png">7101</li>
                            <li>
                                <img src="images/star.png">5.5</li>
                        </ul>
                        <p class="hidden-xs text-left card_intro">${arr[i].introduction}</p>
                            <div class="clearfix"></div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </a>
    </div>
        `;
        idx ++;
            }
            $('#gao_teach_container').html(str)
             // 图片懒加载
             $("img.lazy").lazyload({
                effect: "fadeIn",
                placeholder:'images/placeholder.gif',
                threshold :180
            });
        }
    })
}

refresh('hot');


PageClick = function (pageclickednumber) {
    pagenumber = pageclickednumber;
    refresh(sort_way);
    $("#pager").pager({
        pagenumber: pageclickednumber,
        pagecount: pagecount,
        buttonClickCallback: PageClick
    });
}

// 排序按钮点击事件
$('#sort_box').on('click', 'a', function (e) {
    pagenumber = 1;
    // 重置pagenumber
    e.preventDefault();
    console.log($(this).attr('href'));
    sort_way = $(this).attr('href');
    $(this).siblings().removeClass('petersmall_active')
    $(this).addClass('petersmall_active');
    refresh(sort_way);
})