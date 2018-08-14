

$.ajax({
    // 请求获取老师信息
    type: 'POST',
    url: 'https://mokey.club/wxxkTeacher/indexTeacher',
    success: function (res) {
        // $('.loading_container').css('display','none');
        $('.loading_container').fadeOut();
        // console.log(res.data.gao)
        var gaoArr = res.data.gao;
        var chuArr = res.data.zhong;
        var xiaoArr = res.data.xiao;
        var gaoHtml = "";
        var chuHtml = "";
        var xiaoHtml = "";
        var changeHtml = function (arr) {
            // 生成字符串模版
            var str="";
            for (var i = 0; i < arr.length; i++) {
                str += `
            <div class="col-xs-6 col-sm-3">
            <a class="team__item" href="teacher.html?tid=${arr[i].id}&subject=${arr[i].subject}">
                <div class="team-item__img" style="background-color:${colorArr[i]}">
                    <img data-original="${arr[i].simg}" class="lazy" width="200" alt="${arr[i].tname+arr[i].dept+arr[i].subject}">
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
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
            `;
            }
            return str;
        }

        gaoHtml=changeHtml(gaoArr);
        chuHtml=changeHtml(chuArr);
        xiaoHtml=changeHtml(xiaoArr);
        // console.log(gaoHtml)
        $('#teach_gao').html(gaoHtml)
        $('#teach_chu').html(chuHtml)
        $('#teach_xiao').html(xiaoHtml)

        // 图片懒加载
        $("img.lazy").lazyload({
            effect: "fadeIn",
            placeholder:'images/placeholder.gif',
            threshold :180
        });
    }
})