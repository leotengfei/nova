/**
 * Created by Administrator on 2017/8/2 0002.
 */
/**
 * x5页面发送的ajax
 */
$('#my-btns').on('click','a',function(e){
    e.preventDefault();
    console.log($(this).attr('href'))
    var area_id=$(this).attr('href');
    $(area_id).fadeIn().siblings().hide();

})
$(function () {
    var selectClass=function(tabId,grade,location) {
        $.ajax({
            type: 'POST',
            url: '../sql/xiaoxue.php',
            data: {grade: grade, location: location},
            success: function (data) {
                var html = '';
                if(data.length){
                    for (var i = 0; i < data.length; i++) {
                        html += `
                   <tr>
                       <td width="20%">${data[i].classname}</td>
                        <td width="17%">${data[i].classtitle}</td>
                        <td width="10%">${data[i].gbegin}</td>
                        <td width="10%">${data[i].gend}</td>
                        <td width="25%">${data[i].gtime}</td>
                        <td width="10%">${data[i].location}</td>
                        <td width="10%">${data[i].money}</td>
                   </tr>
                   `;
                    }
                    $('#'+tabId+'>div>div>table td:contains("即将上新...") ').parent().replaceWith(html);
                }else{
                     // 不显示按钮
                     $("[href='#"+tabId+"']").css('display','none');
                     //console.log($("[href='#"+tabId+"']"))
                     
                     // 如果课表内容为空，不显示校区信息
                     $('#'+tabId).css('display','none');
                }
            }
        });
    };


    selectClass('g1bdj','五年级','北大街');
    selectClass('g1ca','五年级','长安');
    //selectClass('g1bj','五年级','北郊');
    selectClass('g1tm','五年级','土门');
    //selectClass('g1gx3','五年级','高新');
    //selectClass('g1wn','五年级','渭南');
    //selectClass('g1pc','五年级','蒲城');
    selectClass('g1bj2','五年级','宝鸡');
    selectClass('g1xy','五年级','咸阳');
    selectClass('g1hh','五年级','黄河');
    selectClass('g1yl','五年级','阎良');
    selectClass('g1fp','五年级','富平');






});
