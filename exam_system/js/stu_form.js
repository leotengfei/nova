/**
 * Created by Administrator on 2017/11/16 0016.
 */
isLanded();


//是否有其他队友
$('#has_others').change(function () {
    //console.log($(this).prop('checked'));
    if ($(this).prop('checked') === true) {
        $('#others').slideDown();
    } else {
        $('#others').slideUp();
    }
});
//提交按钮点击事件
$('#btn_submit').click(function () {
    var regtel = /^[1][3,4,5,7,8][0-9]{9}$/ig;
    var has_mates = $('#has_others').prop('checked');
    var uname = $('#uname').val();
    var school = $('#school').val();
    var subject = arr[$('#subject').val()];
    var area = sessionStorage['area'];
    var mate1_utel = $('#mate1_utel').val();
    var valimate1_utel = regtel.test(mate1_utel);
    var mate1_uname = $('#mate1_uname').val();
    var mate1_school = $('#mate1_school').val();
    var mate1_subject = arr[$('#mate1_subject').val()];
    var regtel2 = /^[1][3,4,5,7,8][0-9]{9}$/ig;
    var mate2_utel = $('#mate2_utel').val();
    var valimate2_utel = regtel2.test(mate2_utel);
    var mate2_uname = $('#mate2_uname').val();
    var mate2_school = $('#mate2_school').val();
    var mate2_subject = arr[$('#mate2_subject').val()];
    //console.log(has_mates);
    if (!has_mates) {
        //如果没有队友
        //console.log(1);
        $.ajax({
            type: 'POST',
            url: 'data/update_uname.php',
            data: {utel: sessionStorage['utel'], uname: uname, school: school, subject: subject},
            success: function (data) {
                if (data.code == '1') {
                    location.href = 'test.html';
                } else {
                    alert('请检查输入信息！');
                }
            }
        })


    } else {
        //如果有队友
        //console.log(mate1_utel,mate2_utel,valimate1_utel,valimate2_utel);
        if (!valimate1_utel || !valimate2_utel) {//验证电话号码
            alert('请检查电话号码是否正确！');
            return;
        }
        if(mate1_utel===mate2_utel){
            alert("队友一和队友二的电话号码不能相同！");
            return;
        }
        var salt_arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var team_id = new Date().getTime();
        team_id = team_id + salt_arr[parseInt(Math.random() * 26)] + salt_arr[parseInt(Math.random() * 26)] + salt_arr[parseInt(Math.random() * 26)] + salt_arr[parseInt(Math.random() * 26)];
        //console.log(team_id);
        $.ajax({
            type: 'POST',
            url: 'data/update_uname_hasmate.php',
            data: {
                utel: sessionStorage['utel'],
                uname: uname,
                school: school,
                subject: subject,
                area: area,
                mate1_utel: mate1_utel,
                mate1_uname: mate1_uname,
                mate1_school: mate1_school,
                mate1_subject: mate1_subject,
                mate2_utel: mate2_utel,
                mate2_uname: mate2_uname,
                mate2_school: mate2_school,
                mate2_subject: mate2_subject,
                team_id: team_id
            },
            success: function (data) {
                //console.log(data);
                if (data.code == '1') {
                    location.href = 'test.html';
                } else if (data.code == '-16' || data.code == '-17') {
                    alert(data.msg);
                }
            }
        })


    }
});
var arr = ['数学', '物理', '英语'];
var first_index = 0;
//级联选择
$('#subject').change(function () {
    //队友一选择按钮改变；
    first_index = $(this).val();
    var html = '';
    for (var i = 0; i < arr.length; i++) {
        if (i != first_index) {
            html += `
        <option value="${i}">${arr[i]}</option>
        `
        }
    }
    $('#mate1_subject').html(html);
    //队友二选择按钮改变；
    var second_index = $('#mate1_subject').val();
    var html_last = '';
    for (var j = 0; j < arr.length; j++) {
        if (j != first_index && j != second_index) {
            html_last += `
        <option value="${j}">${arr[j]}</option>
        `
        }
    }
    $('#mate2_subject').html(html_last);
});
$('#mate1_subject').change(function () {
    var second_index = $('#mate1_subject').val();
    var html_last = '';
    for (var j = 0; j < arr.length; j++) {
        if (j != first_index && j != second_index) {
            html_last += `
        <option value="${j}">${arr[j]}</option>
        `
        }
    }
    $('#mate2_subject').html(html_last);
});
