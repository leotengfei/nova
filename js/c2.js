/**
 * c2页面发送的ajax
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
            url: '../sql/chuzhong.php',
            data: {grade: grade, location: location},
            success: function (data) {
                //改编数据格式
                var deldate = function (str) {
                    var arr = str.split('-');
                    str = parseInt(arr[1]) + '月' + parseInt(arr[2]) + '日';
                    return str;
                };
                var html = '';
                if(data.length){
                    for (var i = 0; i < data.length; i++) {
                        var shijian = data[i].gbegin + '-' + data[i].gend;
                        html += `
                   <tr>
                        <td width="20%">${data[i].classname}</td>
                        <td width="15%">${data[i].grade}${data[i].project}</td>
                        <td width="10%">${deldate(data[i].gbegin)}</td>
                        <td width="10%">${deldate(data[i].gend)}</td>
                        <td width="25%">${data[i].gtime}</td>
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


    selectClass('g1bdj','初二','北大街');
    selectClass('g1ca','初二','长安');
    selectClass('g1jd','初二','交大');
    selectClass('g1bj','初二','北郊');
    selectClass('g1tm','初二','土门');
    selectClass('g1gx2','初二','高新');
    selectClass('g1wn','初二','渭南');
    selectClass('g1pc','初二','蒲城');
    selectClass('g1bj2','初二','宝鸡');
    selectClass('g1xy','初二','咸阳');
    selectClass('g1hh','初二','黄河');
    selectClass('g1yl','初二','阎良');
    selectClass('g1fp','初二','富平');
    selectClass('g1lq','初二','礼泉');






});
