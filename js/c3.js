/**
 * c3页面发送的ajax
 */
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
                for (var i = 0; i < data.length; i++) {
                    var shijian = data[i].gbegin + '-' + data[i].gend;
                    html += `
               <tr>
                    <td width="20%">${data[i].classname}</td>
                    <td width="15%">${data[i].grade}${data[i].project}</td>
                    <td width="10%">${deldate(data[i].gbegin)}</td>
                    <td width="10%">${deldate(data[i].gend)}</td>
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


    selectClass('g1bdj','中考','北大街');
    selectClass('g1ca','中考','长安');
    selectClass('g1jd','中考','交大');
    //selectClass('g1bj','中考','北郊');
    selectClass('g1tm','中考','土门');
    //selectClass('g1gx2','中考','高新');
    selectClass('g1wn','中考','渭南');
    selectClass('g1pc','中考','蒲城');
    selectClass('g1bj2','中考','宝鸡');
    selectClass('g1xy','中考','咸阳');
    //selectClass('g1hh','中考','黄河');
    //selectClass('g1yl','中考','阎良');
    selectClass('g1fp','中考','富平');






});
