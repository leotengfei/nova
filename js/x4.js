/**
 * Created by Administrator on 2017/8/2 0002.
 */
/**
 * x4页面发送的ajax
 */
$(function () {
    var selectClass=function(tabId,grade,location) {
        $.ajax({
            type: 'POST',
            url: '../sql/xiaoxue.php',
            data: {grade: grade, location: location},
            success: function (data) {
                var html = '';
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
            }
        });
    };


    selectClass('g1bdj','四年级','北大街');
    selectClass('g1ca','四年级','长安');
    //selectClass('g1bj','四年级','北郊');
    selectClass('g1tm','四年级','土门');
    //selectClass('g1gx3','四年级','高新');
    //selectClass('g1wn','四年级','渭南');
    //selectClass('g1pc','四年级','蒲城');
    selectClass('g1bj2','四年级','宝鸡');
    selectClass('g1xy','四年级','咸阳');
    selectClass('g1hh','四年级','黄河');
    selectClass('g1yl','四年级','阎良');
    selectClass('g1fp','四年级','富平');






});
