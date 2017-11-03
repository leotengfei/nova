/**
 * Created by Administrator on 2017/9/27 0027.
 */
$(function () {
    var selectClassInfo= function (tag,insert_id) {
        $.ajax({
            type:"POST",
            url:"data/selectIndexClass.php",
            data:{tag:tag},
            success: function (data) {
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
                $('#'+insert_id).append(html);
            }
        })
    };
    selectClassInfo('高中期中冲刺','gaozhong_qizhong');
    selectClassInfo('初中期中冲刺','chuzhong_qizhong');
    selectClassInfo('十一营','mingshikecheng');


});
//观看按钮点击事件
$('#teachers>section').on("click","a", function (e) {
    e.preventDefault();
    //console.log($(e.target).attr('href'));
    sessionStorage['cid']=$(e.target).attr('href');
    sessionStorage['is_free']=$(e.target).prev().val();
    location.href="detail.html";
});