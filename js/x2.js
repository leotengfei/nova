/**
 * Created by Administrator on 2017/8/2 0002.
 */
/**
 * x2页面发送的ajax
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
                    <td width="20%">${data[i].classnum}</td>
                    <td width="17%">${data[i].classname}</td>
                    <td width="10%">${data[i].gbegin}</td>
                    <td width="10%">${data[i].gend}</td>
                    <td width="25%">${data[i].gtime}</td>
                    <td width="10%">${data[i].location}</td>
                    <td width="10%">${data[i].money}</td>
               </tr>
               `;
                }
                $('#'+tabId+'>div>div>table').append(html);
            }
        });
    };


    //selectClass('g1bdj','二年级','北大街');
    selectClass('g1ca','二年级','长安');
    selectClass('g1jd','二年级','东区');
    //selectClass('g1bj','二年级','北郊');
    selectClass('g1tm','二年级','土门');
    selectClass('g1gx3','二年级','高新');
    //selectClass('g1wn','二年级','渭南');
    //selectClass('g1pc','二年级','蒲城');
    selectClass('g1bj2','二年级','宝鸡');
    selectClass('g1xy','二年级','咸阳');
    //selectClass('g1hh','二年级','黄河');
    //selectClass('g1yl','二年级','阎良');
    selectClass('g1fp','二年级','富平');






});
