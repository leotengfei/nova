/**
 * Created by Administrator on 2017/8/2 0002.
 */
/**
 * x3页面发送的ajax
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
                    <td width="15%">${data[i].classnum}</td>
                    <td width="10%">${data[i].classname}</td>
                    <td width="15%">${data[i].gbegin}</td>
                    <td width="15%">${data[i].gend}</td>
                    <td width="10%">${data[i].gtime}</td>
                    <td width="10%">${data[i].location}</td>
                    <td width="10%">${data[i].money}</td>
               </tr>
               `;
                }
                $('#'+tabId+'>div>div>table').append(html);
            }
        });
    };


    //selectClass('g1bdj','三年级','北大街');
    selectClass('g1ca','三年级','长安');
    selectClass('g1jd','三年级','东区');
    //selectClass('g1bj','三年级','北郊');
    selectClass('g1tm','三年级','土门');
    selectClass('g1gx3','三年级','高新');
    //selectClass('g1wn','三年级','渭南');
    //selectClass('g1pc','三年级','蒲城');
    selectClass('g1bj2','三年级','宝鸡');
    selectClass('g1xy','三年级','咸阳');
    //selectClass('g1hh','三年级','黄河');
    //selectClass('g1yl','三年级','阎良');
    selectClass('g1fp','三年级','富平');






});