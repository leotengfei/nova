/**
 * Created by Administrator on 2017/9/27 0027.
 */
$(function () {
   $.ajax({
       type:"GET",
       url:"data/selectIndexClass.php",
       success: function (data) {
           var html='';
           for(var i=0;i<data.length;i++){
               html+=`
                <div class="col-sm-4 col-xs-12">
            <div>
                <img src="img/${data[i].imgUrl}" alt="..." class="img-responsive">
                <div>
                    <h3>${data[i].cname}</h3>
                    <p>${data[i].teacher}</p>
                    <p>
                        <a href="${data[i].cid}" class="btn btn-primary" role="button">点击观看</a>
                    </p>
                </div>
            </div>
        </div>
               `;
           }
           $('#teachers>section').append(html);
       }
   })
});
//观看按钮点击事件
$('#teachers>section').on("click","a", function (e) {
    e.preventDefault();
    console.log($(e.target).attr('href'));
    sessionStorage['cid']=$(e.target).attr('href');
    location.href="detail.html";
});