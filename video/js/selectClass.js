/**
 * Created by Administrator on 2017/12/25 0025.
 */
//请求选课列表信息
if(sessionStorage['tag']===undefined){
    sessionStorage['tag']='all';
}
sessionStorage['grade']='all';
sessionStorage['project']='all';
var change_tag= function (grade) {//头部标签请求逻辑方法
    $.ajax({
        type:'POST',
        data:{tag:sessionStorage['tag'],grade:grade},
        url:'data/getClassList.php',
        success: function (data) {
            var tagArr=data.tag;
            var projectArr=data.project;
            var gradeArr=data.grade;
            var html_tag='<dt>类别</dt>';
            var html_project='<dt>科目</dt>';
            var html_grade='<dt>年级</dt>';
            for(var i=0;i<tagArr.length;i++){
                if(tagArr[i].tag==sessionStorage['tag']){
                    html_tag+=`
                <dd class="active">${tagArr[i].tag}</dd>
            `;
                }else{
                    html_tag+=`
                <dd>${tagArr[i].tag}</dd>
            `;
                }
            }
            $('#selec_tag').html(html_tag);

            for(var j=0;j<projectArr.length;j++){
                if(projectArr[j].project==sessionStorage['project']){
                    html_project+=`
                <dd class="active">${projectArr[j].project}</dd>
            `;
                }else{
                    html_project+=`
                <dd>${projectArr[j].project}</dd>
            `;
                }
            }
            $('#selec_project').html(html_project);
            for(var k=0;k<gradeArr.length;k++){
                if(gradeArr[k].grade==sessionStorage['grade']){
                    html_grade+=`
                <dd class="active">${gradeArr[k].grade}</dd>
            `;
                }else{
                    html_grade+=`
                <dd>${gradeArr[k].grade}</dd>
            `;
                }
            }
            $('#selec_grade').html(html_grade);

        }
    });
};

var change_class=function(){//改变页面课程方法
    $.ajax({
        type:'POST',
        data:{tag:sessionStorage['tag'],grade:sessionStorage['grade'],project:sessionStorage['project']},
        url:'data/selectClass.php',
        success: function (data) {
            //console.log(data);
            var html='';
            for(var i=0;i<data.length;i++){
                html+=`
                <div class="col-sm-3 col-xs-12">
            <div>
                <img src="img/${data[i].imgUrl}" alt="..." class="img-responsive">
                <div>
                    <h3>${data[i].cname}</h3>
                    <p>${data[i].teacher}</p>
                    <p>
                    <input type="hidden" value="${data[i].is_free}"/>
                        <a href="${data[i].cid}" class="btn btn-primary" role="button">点击观看</a>
                    </p>
                </div>
            </div>
        </div>
               `;
            }
            $('#choose_container').html(html);
        }
    })
};

//默认发送请求
change_tag('all');
change_class();

//类别选项点击事件
$('#xuanke>dl').on("click",'dd', function (e) {
    //按钮点击增加active属性
    var listName=$(e.target).parent().children().first().html();
    if(listName==="类别"){
        sessionStorage['tag']=$(e.target).html();
        sessionStorage['grade']='all';
        sessionStorage['project']='all';
        change_tag('all');//年级默认选择所有
    }else if(listName==="年级"){
        sessionStorage['grade']=$(e.target).html();
        sessionStorage['project']='all';
        change_tag($(e.target).html());
    }else if(listName==="科目"){
        sessionStorage['project']=$(e.target).html();
    }
    change_class();
    $(e.target).addClass("active").siblings().removeClass("active");
});


//观看按钮点击事件
$('#classContainer>section').on("click","p>a", function (e) {
    e.preventDefault();
    //console.log($(e.target).attr('href'));
    sessionStorage['cid']=$(e.target).attr('href');
    sessionStorage['is_free']=$(e.target).prev().val();
    location.href="detail.html";
});