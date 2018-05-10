/**
 * g1页面发送的ajax
 */
// 按钮点击事件
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
            url: '../sql/gaozhong.php',
            data: {grade: grade, location: location},
            success: function (data) {
                //改编数据格式
                var deldate = function (str) {
                    var arr = str.split('-');
                    str = parseInt(arr[1]) + '月' + parseInt(arr[2]) + '日' + '-' + parseInt(arr[4]) + '月' + parseInt(arr[5]) + '日';
                    return str;
                };
                var html = '';
                if(data.length){
                    for (var i = 0; i < data.length; i++) {
                     var shijian = data[i].gbegin + '-' + data[i].gend;
                     html += `
                <tr>
                     <td width="15%">${data[i].classname}</td>
                     <td width="10%">${data[i].grade}${data[i].project}</td>
                     <td width="15%">${deldate(shijian)}</td>
                     <td width="15%">${data[i].gtime}</td>
                     <td width="10%">${data[i].location}</td>
                     <td width="10%">${data[i].teacher}</td>
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


    selectClass('g1bdj','高一','北大街');
    selectClass('g1bj','高一','北郊');
    selectClass('g1ca','高一','长安');
    selectClass('g1hh','高一','黄河');
    selectClass('g1jd','高一','交大');
    selectClass('g1gx2','高一','高新');
    selectClass('g1tm','高一','土门');
    selectClass('g1sd','高一','师大');
    selectClass('g1yl','高一','阎良');
    selectClass('g1fp','高一','富平');
    selectClass('g1wn','高一','渭南');
    selectClass('g1pc','高一','蒲城');
    selectClass('g1xy','高一','咸阳');
    selectClass('g1bj2','高一','宝鸡');
    selectClass('g1hz','高一','汉中');
    selectClass('g1lq','高一','礼泉');

    //$(window).scroll(function(){
    //    //console.log($('body').scrollTop());
    //    //console.log($('#g1gx2').offset().top);
    //   if($('body').scrollTop()>$('#g1bdj').offset().top){
    //       console.log(1);
    //   }
    //});




});
