/**
 * Created by Administrator on 2017/11/16 0016.
 */
isLanded();


$('#btn_submit').click(function () {
    var regtel = /^[1][3,4,5,7,8][0-9]{9}$/ig;
    var uname = $('#uname').val();
    var school = $('#school').val();
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
    var regtel3 = /^[1][3,4,5,7,8][0-9]{9}$/ig;
    var mate3_utel = $('#mate3_utel').val();
    var valimate3_utel = regtel3.test(mate3_utel);
    var mate3_uname = $('#mate3_uname').val();
    var mate3_school = $('#mate3_school').val();
    var mate3_subject = arr[$('#mate3_subject').val()];
    //console.log(has_mates);
    if (!valimate1_utel || !valimate2_utel||!valimate3_utel) {//验证电话号码
        alert('请检查电话号码是否正确！');
        return;
    }
    var salt_arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var team_id = new Date().getTime();
    team_id = team_id + salt_arr[parseInt(Math.random() * 26)] + salt_arr[parseInt(Math.random() * 26)] + salt_arr[parseInt(Math.random() * 26)] + salt_arr[parseInt(Math.random() * 26)];
    //console.log(team_id);
    $.ajax({
        type: 'POST',
        url: 'data/update_uname_teacher.php',
        data: {
            utel: sessionStorage['utel'],
            uname: uname,
            school: school,
            area: area,
            mate1_utel: mate1_utel,
            mate1_uname: mate1_uname,
            mate1_school: mate1_school,
            mate1_subject: mate1_subject,
            mate2_utel: mate2_utel,
            mate2_uname: mate2_uname,
            mate2_school: mate2_school,
            mate2_subject: mate2_subject,
            mate3_utel: mate3_utel,
            mate3_uname: mate3_uname,
            mate3_school: mate3_school,
            mate3_subject: mate3_subject,
            team_id: team_id
        },
        success: function (data) {
            //console.log(data);
            if (data.code == '1') {
                location.href = 'score.html';
            } else if (data.code == '-20' || data.code == '-21'||data.code=='22') {
                alert(data.msg);
            }
        }
    })
});

var arr=['数学','物理','英语'];
var first_index=0;
//级联选择
$('#mate1_subject').change(function () {
    //队友二选择按钮改变；
    first_index=$(this).val();
    var html='';
    for(var i=0;i<arr.length;i++){
        if(i!=first_index){
            html+=`
        <option value="${i}">${arr[i]}</option>
        `
        }
    }
    $('#mate2_subject').html(html);
    //队友三选择按钮改变；
    var second_index=$('#mate2_subject').val();
    var html_last='';
    for(var j=0;j<arr.length;j++){
        if(j!=first_index&&j!=second_index){
            html_last+=`
        <option value="${j}">${arr[j]}</option>
        `
        }
    }
    $('#mate3_subject').html(html_last);
});
$('#mate2_subject').change(function () {
    var second_index=$('#mate2_subject').val();
    var html_last='';
    for(var j=0;j<arr.length;j++){
        if(j!=first_index&&j!=second_index){
            html_last+=`
        <option value="${j}">${arr[j]}</option>
        `
        }
    }
    $('#mate3_subject').html(html_last);
});
